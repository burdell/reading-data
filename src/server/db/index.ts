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
export function addToDb(books: BookWithoutId[]) {
  const chunks = getBookChunks(books)
  const db = new AWS.DynamoDB.DocumentClient()
  chunks.forEach(chunk => {
    db.batchWrite(getDynamoInput(chunk), (err, output) => {
      console.log(err)
      console.log(output)
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
  const input: PutItemInputAttributeMap = {
    id: {
      S: uuid()
    }
  }
  const keys = Object.keys(book)
  keys.forEach(key => {
    const dbValue = (book as any)[key]
    if (dbValue) {
      input[key] = {
        [(BookTypeMap as any)[key] || defaultType]: dbValue.toString()
      }
    }
  })

  return input
}
