import Button from "@/components/Button/Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe('test', () => {
  it('zz', () => {
    const handleClick = jest.fn();

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
    
    const button = screen.getByText('버튼');

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  })
})

export {}