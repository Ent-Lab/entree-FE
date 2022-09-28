import Button from "@/components/Button/Button"
import { fireEvent, render, screen } from "@testing-library/react"

describe('Button', () => {
  it('Show button children', () => {
    const handleClick = jest.fn()

    const { container } = render(
    <Button
      size="sm"
      variant="success"
      disabled={false}
      onClickHandler={handleClick}
    >
      버튼
    </Button>
    )
    expect(container).toHaveTextContent('버튼')
  })

  context('When Click Button', () => {
    it('Calls handleClick', () => {
      const handleClick = jest.fn()
  
      render(
      <Button
        size="sm"
        variant="success"
        disabled={false}
        onClickHandler={handleClick}
      >
        버튼
      </Button>
      )
      
      const button = screen.getByText('버튼')
  
      expect(handleClick).not.toBeCalled()
  
      fireEvent.click(button)
  
      expect(handleClick).toBeCalled()
    })
  })
})