---
title: Use daisyUI with Tailwind CSS Standalone CLI
desc: How to run daisyUI with Tailwind CSS Standalone CLI without Node.js
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

### 1. Get Tailwind CSS executable

Follow [Tailwind CSS guide](https://tailwindcss.com/blog/standalone-cli) and get the latest version of Tailwind CSS executable.

### 2. Get daisyUI bundled JS file

Run this code to download latest version of daisyUI as a single js file and put it next to Tailwind's executable file.

```sh:Terminal
curl -sLO https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.js
curl -sLO https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.js
```

### 3. Add Tailwind CSS and daisyUI

Add Tailwind CSS and daisyUI to your CSS file.  
Address your HTML and other markup files in the `source` function.
  
```postcss:input.css
@import "tailwindcss" source(none);
@source "./public/*.{html,php,erb}";
@plugin "./daisyui.js";

/* Optional for custom themes – Docs: https://daisyui.com/docs/themes/#how-to-add-a-new-custom-theme */
@plugin "./daisyui-theme.js"{
  /* custom theme here */
}
```

### 4. Build CSS

Run this command to build the CSS file using Tailwind CSS executable

```sh:Terminal
./tailwindcss -i input.css -o output.css
```

Now you can use daisyUI class names!
