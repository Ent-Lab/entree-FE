import { fireEvent, render, screen } from "@testing-library/react";

import Input from "@/components/Input/Input";

describe('Input', () => {
  it('Show Input placeholder', () => {
    const onChangeHandler = jest.fn();

    render(
      <Input
        label={'test'}
        value={'테스트'}
        type='text'
        placeholder='테스트'
        disabled={false}
        onChange={onChangeHandler}
      />
    );

    const input = screen.getByLabelText('test') as HTMLInputElement;

    expect(input.value).toBe('테스트');
  });

  context('When put a value in Input', () => {
    it('Calls onChangeHandler', () => {
      const onChangeHandler = jest.fn();

      render(
        <Input
          label={'test'}
          type='text'
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