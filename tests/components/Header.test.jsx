import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../../src/components/Header'

describe('Header', () => {
  it('renders the brand name', () => {
    render(<Header />)
    expect(screen.getByText('M.ZRIGOU')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    // Links appear twice (desktop and mobile menu)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0)
    expect(screen.getAllByText('portfolio').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })
})
