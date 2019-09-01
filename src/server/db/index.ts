import { resolve } from 'path'
import AWS from 'aws-sdk'
import {
  BatchWriteItemInput,
  PutItemInputAttributeMap
} from 'aws-sdk/clients/dynamodb'
import uuid from 'uuid/v1'

import { BookWithoutId } from '../types'

if (process.env.NODE_ENV === 'local') {
  AWS.config.loadFromPath(resolve(__dirname, './aws_creds.json'))
}

const UPLOAD_NUMBER = 25
const db = new AWS.DynamoDB.DocumentClient()

export async function addToDb(books: BookWithoutId[]): Promise<number> {
  const chunks = getBookChunks(books)

  if (!chunks.length) return Promise.resolve(0)

  return new Promise((resolve, reject) => {
    chunks.forEach((chunk, index) => {
      db.batchWrite(getDynamoInput(chunk), (err, output) => {
        if (index === chunks.length) {
          resolve(books.length)
        }
      })
    })
  })
}

function getBookChunks(books: BookWithoutId[]): BookWithoutId[][] {
  const chunkNumber = Math.ceil(books.length / UPLOAD_NUMBER)
  let currentChunk = 0
  const chunks = []
  while (currentChunk < chunkNumber) {
    const chunkStart = currentChunk * 25
    chunks.push(books.slice(chunkStart, chunkStart + UPLOAD_NUMBER))
    currentChunk += 1
  }
  return chunks
}

function getDynamoInput(books: BookWithoutId[]): BatchWriteItemInput {
  const putRequests = books.map(getAttributeMap)
  return {
    RequestItems: {
      Books: putRequests.map(request => ({
        PutRequest: {
          Item: request
        }
      }))
    }
  }
}

const defaultType = 'S'
const BookTypeMap: Partial<{ [key in keyof BookWithoutId]: string }> = {
  book_id: 'N',
  my_rating: 'N',
  number_of_pages: 'N'
}

function getAttributeMap(book: BookWithoutId): PutItemInputAttributeMap {
  const input: any = {
    id: uuid()
  }
  const keys = Object.keys(book)
  keys.forEach(key => {
    const dbValue = (book as any)[key]
    if (dbValue) {
      input[key] = dbValue.toString()
    }
  })

  return input
}
