import React from 'react'
import { render, wait } from 'react-testing-library'

import { mockBooks, books2018, books2017 } from '../../test-utils/mock-books'

import { App } from './App'

// jest.mock('../../data/data.ts', () => ({
//   ReadingData: mockBooks
// }))

xdescribe('App', () => {
  it('shows the last year on render', async () => {
    const result = render(<App hasMatches={true} scrollToTop={() => null} />)

    await wait()

    const lastYearCheckbox = result.getByLabelText('2018') as any

    expect(lastYearCheckbox.checked).toBe(true)
    books2018.forEach(book => {
      result.getByText(book.Title)
    })

    books2017.forEach(book => {
      expect(result.queryByText(book.Title)).toBeNull()
    })
  })

  it('correctly filters the year', async () => {
    const result = render(<App hasMatches={true} scrollToTop={() => null} />)
    await wait()

    const label2017 = result.getByLabelText('2017') as HTMLInputElement
    const label2018 = result.getByLabelText('2018') as HTMLInputElement

    books2017.forEach(book => {
      expect(result.queryByText(book.Title)).toBeNull()
    })

    label2017.click()
    await wait()

    expect(label2018.checked).toBe(true)
    expect(label2017.checked).toBe(true)
    books2017.forEach(book => {
      result.getByText(book.Title)
    })
    books2018.forEach(book => {
      result.getByText(book.Title)
    })
  })

  it('correctly filters the rating', async () => {
    const rating1Books = mockBooks.filter(book => book['My Rating'] === 1)
    const rating2Books = mockBooks.filter(book => book['My Rating'] === 2)

    const result = render(<App hasMatches={true} scrollToTop={() => null} />)
    await wait()

    const label2018 = result.getByLabelText('2018') as HTMLInputElement
    const rating2Checkbox = result.getByLabelText('★★☆☆☆') as HTMLInputElement
    const rating1Checkbox = result.getByLabelText('★☆☆☆☆') as HTMLInputElement

    label2018.click()
    rating2Checkbox.click()
    await wait()

    expect(rating2Checkbox.checked).toBe(true)
    expect(rating1Checkbox.checked).toBe(false)
    rating2Books.forEach(book => {
      result.getByText(book.Title)
    })
    rating1Books.forEach(book => {
      expect(result.queryByText(book.Title)).toBeNull()
    })

    rating1Checkbox.click()
    await wait()

    expect(rating2Checkbox.checked).toBe(true)
    expect(rating1Checkbox.checked).toBe(true)
    rating2Books.forEach(book => {
      result.getByText(book.Title)
    })
    rating1Books.forEach(book => {
      result.getByText(book.Title)
    })
  })

  it('correctly filters the month', async () => {
    const result = render(<App hasMatches={true} scrollToTop={() => null} />)
    await wait()

    const label2018 = result.getByLabelText('2018') as HTMLInputElement
    const augustCheckbox = result.getByLabelText('August') as HTMLInputElement
    const juneCheckbox = result.getByLabelText('June') as HTMLInputElement

    label2018.click()
    augustCheckbox.click()
    await wait()

    mockBooks.forEach(book => {
      result.getByText(book.Title)
    })

    augustCheckbox.click()
    juneCheckbox.click()
    await wait()

    mockBooks.forEach(book => {
      expect(result.queryByText(book.Title)).toBeNull()
    })
  })

  it('scrolls when a selection is made', async () => {
    const scroll = jest.fn()
    const result = render(<App hasMatches={true} scrollToTop={scroll} />)
    await wait()

    scroll.mockReset()

    const yearCheckbox = result.getByLabelText('January')
    yearCheckbox.click()
    await wait()

    expect(scroll).toHaveBeenCalled()
  })
})
