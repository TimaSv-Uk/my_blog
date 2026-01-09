# Found this great resours(book) **Refactoring UI** by Adam W. and  Steve S.

Fri Jan  9 10:13:27 AM EET 2026
## I have read 75% give or take and main point i notised and gonna use are:
- Start with a feature, not a layout 
    - make mock up in gray collor, so there is a hierarchy that don't depends on collor  
- use  **text-align: justify;** for god's sake add **hyphend: auto;**  so there is no ugly word gaps. Drenched in cold sweat add this property to https://nt-aget.com.ua/ wordpress site i've workd on,and it looks a lot better
- Use **couple or more colors with 6-10 shades**. No need to limit color pallet
- Save time and nerves from desision fatiud by prepering standart colors, margins, sizes in advance. And it will make webpage look consistent
- Use aboldness and opacity of text to convay text higharacy, (when this is apropriate)
- Use **hsl** color format

There are a lot more wise tips and trics in that book,i will 
definetly finish it and reread it a couple of times(not right aways😁)


Random generated theme i need to make something like this but add spacing and all sizes that i will use from tailwind 
@plugin "daisyui/theme" {
  name: "sunset";
  default: false;
  prefersdark: false;
  color-scheme: "dark";
  --color-base-100: oklch(13% 0.028 261.692);
  --color-base-200: oklch(21% 0.034 264.665);
  --color-base-300: oklch(27% 0.033 256.848);
  --color-base-content: oklch(96% 0.003 264.542);
  --color-primary: oklch(90% 0.182 98.111);
  --color-primary-content: oklch(28% 0.066 53.813);
  --color-secondary: oklch(80% 0.105 251.813);
  --color-secondary-content: oklch(28% 0.091 267.935);
  --color-accent: oklch(78% 0.115 274.713);
  --color-accent-content: oklch(25% 0.09 281.288);
  --color-neutral: oklch(21% 0.034 264.665);
  --color-neutral-content: oklch(98% 0.002 247.839);
  --color-info: oklch(60% 0.126 221.723);
  --color-info-content: oklch(98% 0.019 200.873);
  --color-success: oklch(64% 0.2 131.684);
  --color-success-content: oklch(98% 0.031 120.757);
  --color-warning: oklch(68% 0.162 75.834);
  --color-warning-content: oklch(98% 0.026 102.212);
  --color-error: oklch(59% 0.249 0.584);
  --color-error-content: oklch(97% 0.014 343.198);
  --radius-selector: 0.5rem;
  --radius-field: 2rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1.5px;
  --depth: 1;
  --noise: 1;
}
