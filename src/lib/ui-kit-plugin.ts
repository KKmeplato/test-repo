import plugin from "tailwindcss/plugin";

import { Breakpoints } from "./constants";

export const uiKitPlugin = plugin(
  // Add CSS variables definition to the base layer
  function ({ addBase }) {
    addBase({
      ":root": {
        "--color-base-attention": "61, 88%, 50%",
        "--color-base-critical": "0, 85%, 45%",
        "--color-base-highlight": "190, 44%, 48%",
        "--color-base-primary": "209, 100%, 22%",
        "--color-base-success": "90, 70%, 45%",
        "--color-base-warning": "38, 100%, 55%",
        "--color-border-default": "0, 0%, 87%",
        "--color-border-disabled": "0, 0%, 70%",
        "--color-border-hovered": "0, 0%, 78%",
        "--color-border-pressed": "0, 0%, 74%",
        "--color-border-subdued": "0, 0%, 82%",
        "--color-icon-default": "0 0% 33%",
        "--color-icon-disabled": "0 0% 53%",
        "--color-icon-hovered": "0 0% 30%",
        "--color-icon-on-interactive": "0 0% 97%",
        "--color-interactive-disabled": "0, 0%, 70%",
        "--color-interactive-attention-default": "58, 80%, 46%",
        "--color-interactive-attention-hovered": "59, 81%, 41%",
        "--color-interactive-attention-pressed": "58, 82%, 37%",
        "--color-interactive-critical-default": "0 80% 46%",
        "--color-interactive-critical-hovered": "0 80% 37%",
        "--color-interactive-critical-pressed": "0 80% 29%",
        "--color-interactive-highlight-default": "189 82% 33%",
        "--color-interactive-highlight-hovered": "189, 83%, 29%",
        "--color-interactive-highlight-pressed": "189, 84%, 26%",
        "--color-interactive-plain-default": "0, 0%, 100%",
        "--color-interactive-plain-hovered": "0, 0%, 95%",
        "--color-interactive-plain-pressed": "0, 0%, 89%",
        "--color-interactive-primary-default": "209 100% 22%",
        "--color-interactive-primary-hovered": "209, 100%, 17%",
        "--color-interactive-primary-pressed": "209, 100%, 14%",
        "--color-interactive-success-default": "106, 81%, 29%",
        "--color-interactive-success-hovered": "106, 81%, 23%",
        "--color-interactive-success-pressed": "106, 83%, 18%",
        "--color-interactive-warning-default": "23, 100%, 39%",
        "--color-interactive-warning-hovered": "23, 100%, 35%",
        "--color-interactive-warning-pressed": "23, 100%, 35%",
        "--color-focus": "209, 100%, 59%",
        "--color-outline": "209, 100%, 85%",
        "--color-overlay-modal": "0, 0%, 18%",
        "--color-surface-default": "0 0% 97%",
        "--color-surface-critical-default": "0, 80%, 94%",
        "--color-surface-critical-hovered": "0, 75%, 89%",
        "--color-surface-critical-pressed": "0, 74%, 87%",
        "--color-surface-critical-subdued": "0, 77%, 92%",
        "--color-surface-highlight-default": "191, 73%, 87%",
        "--color-surface-highlight-hovered": "192, 71%, 70%",
        "--color-surface-highlight-pressed": "192, 71%, 63%",
        "--color-surface-highlight-subdued": "191, 71%, 78%",
        "--color-surface-neutral-default": "0 0% 97%",
        "--color-surface-neutral-hovered": "0 0% 87%",
        "--color-surface-neutral-pressed": "0 0% 85%",
        "--color-surface-selected-default": "209, 61%, 86%",
        "--color-surface-selected-hovered": "210, 66%, 78%",
        "--color-surface-selected-pressed": "209, 69%, 72%",
        "--color-surface-success-default": "89, 68%, 89%",
        "--color-surface-success-hovered": "89, 67%, 72%",
        "--color-surface-success-pressed": "89, 66%, 64%",
        "--color-surface-success-subdued": "89, 67%, 80%",
        "--color-surface-warning-default": "38, 95%, 93%",
        "--color-surface-warning-hovered": "38, 92%, 75%",
        "--color-surface-warning-pressed": "38, 92%, 67%",
        "--color-surface-warning-subdued": "38, 93%, 83%",
        "--color-text-attention": "63, 100%, 31%",
        "--color-text-critical": "0, 97%, 40%",
        "--color-text-default": "0 0% 18%",
        "--color-text-disabled": "0 0% 53%",
        "--color-text-highlight": "201, 100%, 25%",
        "--color-text-on-interactive": "0 0% 97%",
        "--color-text-subdued": "0, 0%, 51%",
        "--color-text-success": "120, 100%, 22%",
        "--color-text-warning": "23, 100%, 39%",

        "--radius-interactive-elements-default": "4px",
        "--radius-interactive-elements-small": "2px",
        "--radius-level-0": "32px",
        "--radius-level-1": "8px",
        "--radius-level-2": "4px",
        "--radius-level-3": "2px",
        "--radius-level-negative-2": "32px",

        "-moz-osx-font-smoothing": "grayscale",
        "-webkit-font-smoothing": "antialiased",

        // Custom styling for the number input, because we need to hide the browser's default appearance
        "input[type='number'].uikit-hide-number-spin-controls::-webkit-inner-spin-button, input.stepper-input::-webkit-outer-spin-button":
          {
            "-webkit-appearance": "none",
            appearance: "none"
          },
        "input[type='number'].uikit-hide-number-spin-controls": {
          "-moz-appearance": "textfield"
        }
      }
    });

    addBase({
      "[data-theme='meplato']": {
        "--color-background-default": "0 0% 94%",
        "--color-base-attention": "61, 88%, 50%",
        "--color-base-critical": "0, 85%, 45%",
        "--color-base-highlight": "190, 44%, 48%",
        "--color-base-primary": "209, 100%, 22%",
        "--color-base-success": "90, 70%, 45%",
        "--color-base-warning": "38, 100%, 55%",
        "--color-border-default": "0, 0%, 87%",
        "--color-border-disabled": "0, 0%, 70%",
        "--color-border-hovered": "0, 0%, 78%",
        "--color-border-pressed": "0, 0%, 74%",
        "--color-border-subdued": "0, 0%, 82%",
        "--color-icon-attention": "58, 100%, 44%",
        "--color-icon-critical": "0 57% 78%",
        "--color-icon-default": "0 0% 33%",
        "--color-icon-disabled": "0 0% 53%",
        "--color-icon-highlight": "197 32% 38%",
        "--color-icon-hovered": "0 0% 30%",
        "--color-icon-on-interactive": "0 0% 97%",
        "--color-icon-success": "72 96% 22%",
        "--color-icon-warning": "38 99% 34%",
        "--color-interactive-disabled": "0, 0%, 70%",
        "--color-interactive-attention-default": "58, 80%, 46%",
        "--color-interactive-attention-hovered": "59, 81%, 41%",
        "--color-interactive-attention-pressed": "58, 82%, 37%",
        "--color-interactive-critical-default": "0 80% 46%",
        "--color-interactive-critical-hovered": "0 80% 37%",
        "--color-interactive-critical-pressed": "0 80% 29%",
        "--color-interactive-highlight-default": "189 82% 33%",
        "--color-interactive-highlight-hovered": "189, 83%, 29%",
        "--color-interactive-highlight-pressed": "189, 84%, 26%",
        "--color-interactive-plain-default": "0, 0%, 100%",
        "--color-interactive-plain-hovered": "0, 0%, 95%",
        "--color-interactive-plain-pressed": "0, 0%, 89%",
        "--color-interactive-primary-default": "209 100% 22%",
        "--color-interactive-primary-hovered": "209, 100%, 17%",
        "--color-interactive-primary-pressed": "209, 100%, 14%",
        "--color-interactive-success-default": "106, 81%, 29%",
        "--color-interactive-success-hovered": "106, 81%, 23%",
        "--color-interactive-success-pressed": "106, 83%, 18%",
        "--color-interactive-warning-default": "23, 100%, 39%",
        "--color-interactive-warning-hovered": "23, 100%, 35%",
        "--color-interactive-warning-pressed": "23, 100%, 35%",
        "--color-focus": "209, 100%, 59%",
        "--color-outline": "209, 100%, 85%",
        "--color-surface-default": "0 0% 97%",
        "--color-surface-disabled": "0 0% 76%",
        "--color-surface-hovered": "0 0% 87%",
        "--color-surface-pressed": "0 0% 82%",
        "--color-surface-attention-default": "60, 76%, 88%",
        "--color-surface-attention-hovered": "60, 73%, 84%",
        "--color-surface-attention-pressed": "60, 73%, 81%",
        "--color-surface-attention-subdued": "60, 60%, 86%",
        "--color-surface-critical-default": "0, 80%, 94%",
        "--color-surface-critical-hovered": "0, 75%, 89%",
        "--color-surface-critical-pressed": "0, 74%, 87%",
        "--color-surface-critical-subdued": "0, 90%, 96%",
        "--color-surface-highlight-default": "191, 73%, 87%",
        "--color-surface-highlight-hovered": "192, 71%, 70%",
        "--color-surface-highlight-pressed": "192, 71%, 63%",
        "--color-surface-highlight-subdued": "197, 43%, 92%",
        "--color-surface-neutral-default": "0 0% 92%",
        "--color-surface-neutral-hovered": "0 0% 87%",
        "--color-surface-neutral-pressed": "0 0% 85%",
        "--color-surface-neutral-subdued": "0 0% 96%",
        "--color-surface-selected-default": "209, 61%, 86%",
        "--color-surface-selected-hovered": "210, 66%, 78%",
        "--color-surface-selected-pressed": "209, 69%, 72%",
        "--color-surface-success-default": "89, 68%, 89%",
        "--color-surface-success-hovered": "89, 67%, 72%",
        "--color-surface-success-pressed": "89, 66%, 64%",
        "--color-surface-success-subdued": "77, 39%, 91%",
        "--color-surface-warning-default": "38, 95%, 93%",
        "--color-surface-warning-hovered": "38, 92%, 75%",
        "--color-surface-warning-pressed": "38, 92%, 67%",
        "--color-surface-warning-subdued": "39, 92%, 95%",
        "--color-text-attention": "63, 100%, 31%",
        "--color-text-critical": "0, 97%, 40%",
        "--color-text-default": "0 0% 18%",
        "--color-text-disabled": "0 0% 53%",
        "--color-text-highlight": "201, 100%, 25%",
        "--color-text-on-interactive": "0 0% 97%",
        "--color-text-subdued": "0, 0%, 51%",
        "--color-text-success": "120, 100%, 22%",
        "--color-text-warning": "23, 100%, 39%",

        "--interactive-elements-default": "4px",
        "--interactive-elements-small": "2px",
        "--radius-interactive-elements-default": "4px",
        "--radius-interactive-elements-small": "2px",
        "--radius-level-1": "8px",
        "--radius-level-2": "4px",
        "--radius-level-3": "2px",
        "--radius-level-negative-2": "32px"
      },
      "[data-theme='webridge']": {
        "--color-background-default": "0 0% 94%",
        "--color-base-attention": "58, 100%, 44%",
        "--color-base-critical": "0, 57%, 51%",
        "--color-base-primary": "106, 82%, 26%",
        "--color-base-highlight": "198, 32%, 48%",
        "--color-base-success": "72, 96%, 22%",
        "--color-base-warning": "38, 98%, 38%",
        "--color-border-default": "0, 0%, 89%",
        "--color-border-disabled": "0, 0%, 72%",
        "--color-border-hovered": "0, 0%, 85%",
        "--color-border-pressed": "0, 0%, 80%",
        "--color-border-subdued": "0, 0%, 87%",
        "--color-icon-attention": "58 100% 44%",
        "--color-icon-critical": "0 57% 78%",
        "--color-icon-default": "0 0% 33%",
        "--color-icon-disabled": "0 0% 53%",
        "--color-icon-highlight": "197 32% 38%",
        "--color-icon-hovered": "0 0% 29%",
        "--color-icon-on-interactive": "0 0% 97%",
        "--color-icon-success": "72 96% 22%",
        "--color-icon-warning": "38 99% 34%",
        "--color-interactive-disabled": "0, 0%, 64%",
        "--color-interactive-attention-default": "58, 100%, 44%",
        "--color-interactive-attention-hovered": "58, 100%, 41%",
        "--color-interactive-attention-pressed": "58, 100%, 39%",
        "--color-interactive-critical-default": "0 57% 51%",
        "--color-interactive-critical-hovered": "0 58% 46%",
        "--color-interactive-critical-pressed": "0 58% 41%",
        "--color-interactive-highlight-default": "198 32% 48%",
        "--color-interactive-highlight-hovered": "197, 32%, 45%",
        "--color-interactive-highlight-pressed": "197, 32%, 43%",
        "--color-interactive-plain-default": "0, 0%, 100%",
        "--color-interactive-plain-hovered": "0, 0%, 95%",
        "--color-interactive-plain-pressed": "0, 0%, 89%",
        "--color-interactive-primary-default": "106 82% 26%",
        "--color-interactive-primary-hovered": "106 83% 24%",
        "--color-interactive-primary-pressed": "105 85% 21%",
        "--color-interactive-success-default": "72, 96%, 22%",
        "--color-interactive-success-hovered": "72, 98%, 19%",
        "--color-interactive-success-pressed": "72 100% 17%",
        "--color-interactive-warning-default": "25, 82%, 74%",
        "--color-interactive-warning-hovered": "25, 81%, 67%",
        "--color-interactive-warning-pressed": "25, 80%, 60%",
        "--color-focus": "209, 100%, 59%",
        "--color-outline": "209, 100%, 85%",
        "--color-surface-default": "0 0% 99%",
        "--color-surface-disabled": "0 0% 76%",
        "--color-surface-hovered": "0 0% 87%",
        "--color-surface-pressed": "0 0% 82%",
        "--color-surface-attention-default": "60, 61%, 91%",
        "--color-surface-attention-hovered": "60, 59%, 82%",
        "--color-surface-attention-pressed": "60, 58%, 77%",
        "--color-surface-attention-subdued": "60, 60%, 86%",
        "--color-surface-critical-default": "0, 100%, 98%",
        "--color-surface-critical-hovered": "0, 94%, 94%",
        "--color-surface-critical-pressed": "0, 91%, 91%",
        "--color-surface-critical-subdued": "0, 90%, 96%",
        "--color-surface-highlight-default": "195, 43%, 95%",
        "--color-surface-highlight-hovered": "196, 39%, 89%",
        "--color-surface-highlight-pressed": "196, 39%, 86%",
        "--color-surface-highlight-subdued": "197, 43%, 92%",
        "--color-surface-neutral-default": "0 0% 95%",
        "--color-surface-neutral-hovered": "0 0% 93%",
        "--color-surface-neutral-pressed": "0 0% 90%",
        "--color-surface-neutral-subdued": "0 0% 96%",
        "--color-surface-selected-default": "0, 0%, 89%",
        "--color-surface-selected-hovered": "0, 0%, 89%",
        "--color-surface-selected-pressed": "105, 27%, 88%",
        "--color-surface-success-default": "70, 38%, 94%",
        "--color-surface-success-hovered": "75, 40%, 88%",
        "--color-surface-success-pressed": "74, 40%, 86%",
        "--color-surface-success-subdued": "77, 39%, 91%",
        "--color-surface-warning-default": "38, 100%, 98%",
        "--color-surface-warning-hovered": "37, 94%, 93%",
        "--color-surface-warning-pressed": "38, 92%, 91%",
        "--color-surface-warning-subdued": "39, 92%, 95%",
        "--color-text-attention": "63, 28%, 45%",
        "--color-text-critical": "0, 58%, 46%",
        "--color-text-default": "0 0% 18%",
        "--color-text-disabled": "0 0% 45%",
        "--color-text-highlight": "197, 32%, 38%",
        "--color-text-on-interactive": "0 0% 97%",
        "--color-text-subdued": "0, 0%, 51%",
        "--color-text-success": "72, 96%, 22%",
        "--color-text-warning": "38, 99%, 34%",

        "--interactive-elements-default": "32px",
        "--interactive-elements-small": "16px",
        "--radius-interactive-elements-default": "32px",
        "--radius-interactive-elements-small": "16px",
        "--radius-level-1": "16px",
        "--radius-level-2": "8px",
        "--radius-level-3": "4px",
        "--radius-level-negative-2": "64px"
      },
      "[data-theme='meplato'][data-mode='dark']": {
        "--color-background-default": "0 0% 16%",
        "--color-base-attention": "61, 100%, 44%",
        "--color-base-critical": "0, 85%, 55%",
        "--color-base-highlight": "187, 70%, 60%",
        "--color-base-primary": "209, 98%, 76%",
        "--color-base-success": "90, 70%, 60%",
        "--color-base-warning": "38, 100%, 65%",
        "--color-border-default": "0, 0%, 36%",
        "--color-border-disabled": "0, 0%, 32%",
        "--color-border-hovered": "0, 0%, 33%",
        "--color-border-pressed": "0, 0%, 31%",
        "--color-border-subdued": "0, 0%, 35%",
        "--color-icon-attention": "57 71% 57%",
        "--color-icon-critical": "0 57% 78%",
        "--color-icon-default": "0 0% 79%",
        "--color-icon-disabled": "0 0% 32%",
        "--color-icon-highlight": "198 32% 75%",
        "--color-icon-hovered": "0 0% 73%",
        "--color-icon-on-interactive": "0 0% 18%",
        "--color-icon-success": "75 58% 75%",
        "--color-icon-warning": "38 79% 74%",
        "--color-interactive-disabled": "0, 0%, 49%",
        "--color-interactive-attention-default": "61, 100%, 82%",
        "--color-interactive-attention-hovered": "61, 100%, 74%",
        "--color-interactive-attention-pressed": "61, 100%, 66%",
        "--color-interactive-critical-default": "0 100% 82%",
        "--color-interactive-critical-hovered": "0 100% 74%",
        "--color-interactive-critical-pressed": "0 100% 66%",
        "--color-interactive-highlight-default": "192 100% 82%",
        "--color-interactive-highlight-hovered": "192, 100%, 74%",
        "--color-interactive-highlight-pressed": "192, 100%, 66%",
        "--color-interactive-plain-default": "0, 0%, 26%",
        "--color-interactive-plain-hovered": "0, 0%, 23%",
        "--color-interactive-plain-pressed": "0, 0%, 21%",
        "--color-interactive-primary-default": "209 100% 75%",
        "--color-interactive-primary-hovered": "209, 100%, 60%",
        "--color-interactive-primary-pressed": "209, 100%, 48%",
        "--color-interactive-success-default": "96, 83%, 72%",
        "--color-interactive-success-hovered": "96, 83%, 57%",
        "--color-interactive-success-pressed": "97, 83%, 45%",
        "--color-interactive-warning-default": "25, 82%, 74%",
        "--color-interactive-warning-hovered": "25, 81%, 67%",
        "--color-interactive-warning-pressed": "25, 80%, 60%",
        "--color-focus": "209, 100%, 59%",
        "--color-outline": "209, 100%, 85%",
        "--color-surface-default": "0 0% 30%",
        "--color-surface-disabled": "0 0% 39%",
        "--color-surface-hovered": "0 0% 24%",
        "--color-surface-pressed": "0 0% 19%",
        "--color-surface-attention-default": "61, 48%, 35%",
        "--color-surface-attention-hovered": "61, 49%, 32%",
        "--color-surface-attention-pressed": "61, 49%, 31%",
        "--color-surface-attention-subdued": "57, 67%, 33%",
        "--color-surface-critical-default": "0, 37%, 42%",
        "--color-surface-critical-hovered": "0, 38%, 40%",
        "--color-surface-critical-pressed": "0, 38%, 38%",
        "--color-surface-critical-subdued": "350, 39%, 26%",
        "--color-surface-highlight-default": "197, 43%, 32%",
        "--color-surface-highlight-hovered": "198, 45%, 30%",
        "--color-surface-highlight-pressed": "198, 46%, 29%",
        "--color-surface-highlight-subdued": "198, 38%, 25%",
        "--color-surface-neutral-default": "0 0% 31%",
        "--color-surface-neutral-hovered": "0 0% 29%",
        "--color-surface-neutral-pressed": "0 0% 28%",
        "--color-surface-neutral-subdued": "0 0% 19%",
        "--color-surface-selected-default": "214, 38%, 42%",
        "--color-surface-selected-hovered": "214, 39%, 33%",
        "--color-surface-selected-pressed": "214, 39%, 26%",
        "--color-surface-success-default": "110, 38%, 32%",
        "--color-surface-success-hovered": "110, 39%, 30%",
        "--color-surface-success-pressed": "110, 40%, 29%",
        "--color-surface-success-subdued": "72, 31%, 25%",
        "--color-surface-warning-default": "38, 100%, 28%",
        "--color-surface-warning-hovered": "38, 100%, 22%",
        "--color-surface-warning-pressed": "38, 100%, 20%",
        "--color-surface-warning-subdued": "35, 71%, 22%",
        "--color-text-attention": "60, 100%, 74%",
        "--color-text-critical": "0, 100%, 82%",
        "--color-text-default": "0 0% 94%",
        "--color-text-disabled": "0, 0%, 32%",
        "--color-text-highlight": "185, 82%, 65%",
        "--color-text-on-interactive": "0 0% 18%",
        "--color-text-subdued": "0, 0%, 75%",
        "--color-text-success": "96, 83%, 72%",
        "--color-text-warning": "47, 100%, 50%",

        "--interactive-elements-default": "4px",
        "--interactive-elements-small": "2px"
      },
      "[data-theme='webridge'][data-mode='dark']": {
        "--color-background-default": "0 0% 18%",
        "--color-base-attention": "58, 95%, 63%",
        "--color-base-critical": "0, 57%, 70%",
        "--color-base-highlight": "197, 56%, 62%",
        "--color-base-primary": "106, 81%, 41%",
        "--color-base-success": "72, 54%, 62%",
        "--color-base-warning": "38, 84%, 68%",
        "--color-border-default": "0, 0%, 43%",
        "--color-border-disabled": "0, 0%, 42%",
        "--color-border-hovered": "0, 0%, 40%",
        "--color-border-pressed": "0, 0%, 38%",
        "--color-border-subdued": "0, 0%, 41%",
        "--color-icon-attention": "57 71% 57%",
        "--color-icon-critical": "0 57% 78%",
        "--color-icon-default": "0 0% 79%",
        "--color-icon-disabled": "0 0% 32%",
        "--color-icon-highlight": "198 32% 75%",
        "--color-icon-hovered": "0 0% 83%",
        "--color-icon-on-interactive": "0 0% 18%",
        "--color-icon-success": "75 58% 75%",
        "--color-icon-warning": "38 79% 74%",
        "--color-interactive-disabled": "0, 0%, 54%",
        "--color-interactive-attention-default": "58, 95%, 63%",
        "--color-interactive-attention-hovered": "58, 94%, 60%",
        "--color-interactive-attention-pressed": "58, 95%, 63%",
        "--color-interactive-critical-default": "0 57% 70%",
        "--color-interactive-critical-hovered": "0 57% 63%",
        "--color-interactive-critical-pressed": "0 57% 56%",
        "--color-interactive-highlight-default": "197 56% 62%",
        "--color-interactive-highlight-hovered": "197, 56%, 58%",
        "--color-interactive-highlight-pressed": "197, 55%, 55%",
        "--color-interactive-plain-default": "0, 0%, 26%",
        "--color-interactive-plain-hovered": "0, 0%, 23%",
        "--color-interactive-plain-pressed": "0, 0%, 21%",
        "--color-interactive-primary-default": "106 81% 41%",
        "--color-interactive-primary-hovered": "106, 82%, 37%",
        "--color-interactive-primary-pressed": "106, 82%, 33%",
        "--color-interactive-success-default": "72, 54%, 62%",
        "--color-interactive-success-disabled": "0 0% 39%",
        "--color-interactive-success-hovered": "72 54% 55%",
        "--color-interactive-success-pressed": "71 54% 49%",
        "--color-interactive-warning-default": "38, 84%, 68%",
        "--color-interactive-warning-hovered": "38, 84%, 64%",
        "--color-interactive-warning-pressed": "38, 83%, 61%",
        "--color-focus": "209, 100%, 59%",
        "--color-outline": "209, 100%, 85%",
        "--color-surface-default": "0 0% 30%",
        "--color-surface-disabled": "0 0% 39%",
        "--color-surface-hovered": "0 0% 24%",
        "--color-surface-pressed": "0 0% 19%",
        "--color-surface-attention-default": "57, 67%, 35%",
        "--color-surface-attention-hovered": "57, 68%, 31%",
        "--color-surface-attention-pressed": "57, 68%, 30%",
        "--color-surface-attention-subdued": "57, 67%, 33%",
        "--color-surface-critical-default": "350, 38%, 28%",
        "--color-surface-critical-hovered": "350, 39%, 25%",
        "--color-surface-critical-pressed": "351, 38%, 24%",
        "--color-surface-critical-subdued": "350, 39%, 26%",
        "--color-surface-highlight-default": "197, 37%, 26%",
        "--color-surface-highlight-hovered": "198, 37%, 23%",
        "--color-surface-highlight-pressed": "197, 37%, 22%",
        "--color-surface-highlight-subdued": "198, 38%, 25%",
        "--color-surface-neutral-default": "0 0% 20%",
        "--color-surface-neutral-hovered": "0 0% 17%",
        "--color-surface-neutral-pressed": "0 0% 16%",
        "--color-surface-neutral-subdued": "0 0% 19%",
        "--color-surface-selected-default": "110, 11%, 22%",
        "--color-surface-selected-hovered": "109, 10%, 21%",
        "--color-surface-selected-pressed": "109, 12%, 18%",
        "--color-surface-success-default": "71, 32%, 26%",
        "--color-surface-success-hovered": "71, 32%, 24%",
        "--color-surface-success-pressed": "72, 32%, 22%",
        "--color-surface-success-subdued": "72, 31%, 25%",
        "--color-surface-warning-default": "36, 71%, 23%",
        "--color-surface-warning-hovered": "35, 71%, 20%,",
        "--color-surface-warning-pressed": "35, 73%, 19%",
        "--color-surface-warning-subdued": "35, 71%, 22%",
        "--color-text-attention": "63, 59%, 75%",
        "--color-text-critical": "0, 57%, 78%",
        "--color-text-default": "0 0% 99%",
        "--color-text-disabled": "0 0% 75%",
        "--color-text-highlight": "198, 32%, 75%",
        "--color-text-on-interactive": "0 0% 18%",
        "--color-text-subdued": "0, 0%, 77%",
        "--color-text-success": "75, 58%, 75%",
        "--color-text-warning": "38, 79%, 74%",

        "--interactive-elements-default": "32px",
        "--interactive-elements-small": "16px"
      }
    });
  },
  // Extend the Tailwind theme
  {
    theme: {
      extend: {
        animation: {
          "dropdown-open": "revealInFromTop 0.2s ease-in-out",
          "dropdown-close": "revealOutFromBottom 0.2s ease-in-out",
          "accordion-open": "slideDown 300ms ease-out",
          "accordion-close": "slideUp 100ms ease-out"
        },
        borderColor: {
          default: "hsl(var(--color-border-default))",
          disabled: "hsl(var(--color-border-disabled))",
          focus: "hsl(var(--color-focus))",
          hovered: "hsl(var(--color-border-hovered))",
          pressed: "hsl(var(--color-border-pressed))",
          subdued: "hsl(var(--color-border-subdued))"
        },
        backgroundColor: {
          DEFAULT: "hsl(var(--color-background-default))"
        },
        borderRadius: {
          "interactive-elements-default":
            "var(--radius-interactive-elements-default)",
          "interactive-elements-small":
            "var(--radius-interactive-elements-small)",
          "level-0": "var(--radius-level-0)",
          "level-1": "var(--radius-level-1)",
          "level-2": "var(--radius-level-2)",
          "level-3": "var(--radius-level-3)",
          "level-negative-2": "var(--radius-level-negative-2)"
        },
        boxShadow: {
          "interactive-light":
            "0px 16px 48px 0px rgba(0, 0, 0, 0.20), 0px 0px 2px 0.5px rgba(0, 0, 0, 0.20), 0px 0px 4px 0px rgba(255, 255, 255, 0.50) inset",
          "interactive-dark":
            "0px 16px 48px 0px rgba(0, 0, 0, 0.20), 0px 0px 2px 0.5px rgba(0, 0, 0, 0.20), 0px 0px 4px 0px rgba(255, 255, 255, 0.50) inset",
          md: "0px 0px 2px 0.5px rgba(0, 0, 0, 0.20), 0px 2.66667px 8px 0px rgba(0, 0, 0, 0.13), 0px 0px 3px 0px rgba(255, 255, 255, 0.50) inset",
          xs: "0px 0px 2px 0.5px rgba(0, 0, 0, 0.20), 0px 0.66667px 2px 0px rgba(0, 0, 0, 0.13), 0px 0px 3px 0px rgba(255, 255, 255, 0.50) inset",
          "2xl":
            "0px 16px 48px 0px rgba(0, 0, 0, 0.20), 0px 0px 2px 0.5px rgba(0, 0, 0, 0.20), 0px 0px 4px 0px rgba(255, 255, 255, 0.50) inset"
        },
        colors: {
          attention: "hsl(var(--color-base-attention))",
          critical: "hsl(var(--color-base-critical))",
          highlight: "hsl(var(--color-base-highlight))",
          primary: "hsl(var(--color-base-primary))",
          success: "hsl(var(--color-base-success))",
          warning: "hsl(var(--color-base-warning))",
          surface: {
            DEFAULT: "hsl(var(--color-surface-default))",
            disabled: "hsl(var(--color-surface-disabled))",
            hovered: "hsl(var(--color-surface-hovered))",
            pressed: "hsl(var(--color-surface-pressed))",
            attention: {
              DEFAULT: "hsl(var(--color-surface-attention-default))",
              hovered: "hsl(var(--color-surface-attention-hovered))",
              pressed: "hsl(var(--color-surface-attention-pressed))",
              subdued: "hsl(var(--color-surface-attention-subdued))"
            },
            critical: {
              DEFAULT: "hsl(var(--color-surface-critical-default))",
              hovered: "hsl(var(--color-surface-critical-hovered))",
              pressed: "hsl(var(--color-surface-critical-pressed))",
              subdued: "hsl(var(--color-surface-critical-subdued))"
            },
            highlight: {
              DEFAULT: "hsl(var(--color-surface-highlight-default))",
              hovered: "hsl(var(--color-surface-highlight-hovered))",
              pressed: "hsl(var(--color-surface-highlight-pressed))",
              subdued: "hsl(var(--color-surface-highlight-subdued))"
            },
            neutral: {
              DEFAULT: "hsl(var(--color-surface-neutral-default))",
              hovered: "hsl(var(--color-surface-neutral-hovered))",
              pressed: "hsl(var(--color-surface-neutral-pressed))",
              subdued: "hsl(var(--color-surface-neutral-subdued))"
            },
            selected: {
              DEFAULT: "hsl(var(--color-surface-selected-default))",
              hovered: "hsl(var(--color-surface-selected-hovered))",
              pressed: "hsl(var(--color-surface-selected-pressed))"
            },
            success: {
              DEFAULT: "hsl(var(--color-surface-success-default))",
              hovered: "hsl(var(--color-surface-success-hovered))",
              pressed: "hsl(var(--color-surface-success-pressed))",
              subdued: "hsl(var(--color-surface-success-subdued))"
            },
            warning: {
              DEFAULT: "hsl(var(--color-surface-warning-default))",
              hovered: "hsl(var(--color-surface-warning-hovered))",
              pressed: "hsl(var(--color-surface-warning-pressed))",
              subdued: "hsl(var(--color-surface-warning-subdued))"
            }
          },
          icon: {
            attention: "hsl(var(--color-icon-attention))",
            critical: "hsl(var(--color-icon-critical))",
            DEFAULT: "hsl(var(--color-icon-default))",
            disabled: "hsl(var(--color-icon-disabled))",
            highlight: "hsl(var(--color-icon-highlight))",
            hovered: "hsl(var(--color-icon-hovered))",
            "on-interactive": "hsl(var(--color-icon-on-interactive))",
            success: "hsl(var(--color-icon-success))",
            warning: "hsl(var(--color-icon-warning))"
          },
          interactive: {
            disabled: "hsl(var(--color-interactive-disabled))",
            attention: {
              DEFAULT: "hsl(var(--color-interactive-attention-default))",
              hovered: "hsl(var(--color-interactive-attention-hovered))",
              pressed: "hsl(var(--color-interactive-attention-pressed))"
            },
            critical: {
              DEFAULT: "hsl(var(--color-interactive-critical-default))",
              hovered: "hsl(var(--color-interactive-critical-hovered))",
              pressed: "hsl(var(--color-interactive-critical-pressed))"
            },
            highlight: {
              DEFAULT: "hsl(var(--color-interactive-highlight-default))",
              hovered: "hsl(var(--color-interactive-highlight-hovered))",
              pressed: "hsl(var(--color-interactive-highlight-pressed))"
            },
            plain: {
              DEFAULT: "hsl(var(--color-interactive-plain-default))",
              hovered: "hsl(var(--color-interactive-plain-hovered))",
              pressed: "hsl(var(--color-interactive-plain-pressed))"
            },
            primary: {
              DEFAULT: "hsl(var(--color-interactive-primary-default))",
              hovered: "hsl(var(--color-interactive-primary-hovered))",
              pressed: "hsl(var(--color-interactive-primary-pressed))"
            },
            success: {
              DEFAULT: "hsl(var(--color-interactive-success-default))",
              hovered: "hsl(var(--color-interactive-success-hovered))",
              pressed: "hsl(var(--color-interactive-success-pressed))"
            },
            warning: {
              DEFAULT: "hsl(var(--color-interactive-warning-default))",
              hovered: "hsl(var(--color-interactive-warning-hovered))",
              pressed: "hsl(var(--color-interactive-warning-pressed))"
            }
          },
          outline: {
            default: "hsl(var(--color-border-default))",
            hovered: "hsl(var(--color-border-hovered))",
            pressed: "hsl(var(--color-border-pressed))",
            subdued: "hsl(var(--color-border-subdued))"
          },
          overlay: {
            modal: "hsl(var(--color-overlay-modal))"
          }
        },
        fontFamily: {
          sans: ["Inter Variable", "sans-serif"],
          mono: ["Roboto Mono", "sans-serif"]
        },
        fontSmoothing: {
          antialiased: "antialiased"
        },
        keyframes: {
          modalIn: {
            from: { transform: "translateY(50px)", opacity: "0" },
            to: { transform: "translateY(0)", opacity: "1" }
          },
          modalInOverlay: {
            from: { opacity: "0" },
            to: { opacity: "0.2" }
          },
          modalOut: {
            from: { transform: "translateY(0)", opacity: "1" },
            to: { transform: "translateY(50px)", opacity: "0" }
          },
          modalOutOverlay: {
            from: { opacity: "0.2" },
            to: { opacity: "0" }
          },
          revealInFromTop: {
            "0%": {
              transform: "translateY(-5%)",
              opacity: "0",
              pointerEvents: "none"
            },
            "100%": {
              transform: "translateY(0%)",
              opacity: "1",
              pointerEvents: "auto"
            }
          },
          revealOutFromBottom: {
            "0%": {
              transform: "translateY(0%)",
              opacity: "1",
              pointerEvents: "none"
            },
            "100%": {
              transform: "translateY(-5%)",
              opacity: "0",
              pointerEvents: "none"
            }
          },
          slideDown: {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" }
          },
          slideUp: {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" }
          },
          toastIn: {
            from: {
              /**
               * 100%: should aproximately be the height of the toast
               * 3.75rem: The bottom position of the RadixToast.Viewport in the toast context
               * 1.25rem: The starting position of the toast from Figma
               */
              transform: "translateY(calc(100% + 3.75rem + 1.25rem))"
            },
            to: {
              transform: "translateY(0)"
            }
          },
          toastOut: {
            from: {
              transform: "translateY(0)"
            },
            to: {
              /**
               * 100%: should aproximately be the height of the toast
               * 3.75rem: The bottom position of the RadixToast.Viewport in the toast context
               * 1.25rem: The starting position of the toast from Figma
               */
              transform: "translateY(calc(100% + 3.75rem + 1.25rem))"
            }
          }
        },
        outlineColor: {
          focus: "hsl(var(--color-outline))",
          "focus-link": "hsl(var(--color-focus))"
        },
        ringColor: {
          focus: "hsl(var(--color-focus))",
          "focus-link": "hsl(var(--color-outline))"
        },
        textColor: {
          attention: "hsl(var(--color-text-attention))",
          critical: "hsl(var(--color-text-critical))",
          DEFAULT: "hsl(var(--color-text-default))",
          disabled: "hsl(var(--color-text-disabled))",
          highlight: "hsl(var(--color-text-highlight))",
          "on-interactive": "hsl(var(--color-text-on-interactive))",
          subdued: "hsl(var(--color-text-subdued))",
          success: "hsl(var(--color-text-success))",
          warning: "hsl(var(--color-text-warning))"
        },
        zIndex: {
          dropdown: "1200",
          modal: "1501",
          modalOverlay: "1500"
        }
      },
      screens: {
        sm: `${Breakpoints.sm}px`,
        md: `${Breakpoints.md}px`,
        lg: `${Breakpoints.lg}px`,
        xl: `${Breakpoints.xl}px`,
        "2xl": `${Breakpoints["2xl"]}px`
      }
    }
  }
);
