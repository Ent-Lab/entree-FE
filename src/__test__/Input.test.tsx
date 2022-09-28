import { fireEvent, render, screen } from "@testing-library/react";

import Input from "@/components/Input/Input";

describe('Input', () => {
  it('Show Input value', () => {
    const onChangeHandler = jest.fn();

    const { container } = render(
      <Input
        label={'test'}
        size={'sm'}
        type='text'
        placeholder='테스트'
        disabled={false}
        onChange={onChangeHandler}
      />
    );

    expect(container).toHaveTextContent('test');

  });

  context('When put a value in Input', () => {
    it('Calls onChangeHandler', () => {
      const onChangeHandler = jest.fn();

      render(
        <Input
          label={'test'}
          type='text'
          size={'sm'}
          placeholder='테스트'
          disabled={false}
          onChange={onChangeHandler}
        />
      );

      const input = screen.getByLabelText('test') as HTMLInputElement;

      fireEvent.change(input, { target: { value: '테스트2' } });

      expect(input.value).toBe('테스트2');
    });
  });
});