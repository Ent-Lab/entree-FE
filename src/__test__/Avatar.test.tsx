import { render } from "@testing-library/react";

import Avatar from "@/components/Avatar/Avatar";

describe('Avatar', () => {
  it('alt contains correct value', () => {
    render(<Avatar src="" size="md" />);

    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.alt).toContain("Avatar of the md image");
  });

  it('src contains correct value', () => {
    render(<Avatar src="https://www.example.com/image-md.png" size="md" />);

    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.src).toContain("https://www.example.com/image-md.png");
  });
});