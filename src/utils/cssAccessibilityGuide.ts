/* CSS Accessibility Best Practices for Adam Iverson's Portfolio
 * 
 * This file documents the accessibility improvements made to the CSS
 * and provides guidelines for maintaining accessibility standards.
 */

// =============================================================================
// CSS ACCESSIBILITY IMPROVEMENTS SUMMARY
// =============================================================================

export const cssAccessibilityImprovements = {
  focusManagement: {
    title: "Enhanced Focus Indicators",
    changes: [
      "✅ Consistent 3px solid outline with 2px offset",
      "✅ Different colors for light/dark themes",
      "✅ High contrast mode support",
      "✅ Windows High Contrast Mode compatibility"
    ],
    wcagCriteria: "2.4.7 Focus Visible (AA)"
  },

  touchTargets: {
    title: "Touch Target Accessibility",
    changes: [
      "✅ Minimum 44px height/width for buttons",
      "✅ Adequate padding for touch interfaces",
      "✅ Proper spacing between interactive elements"
    ],
    wcagCriteria: "2.5.5 Target Size (AAA)"
  },

  reducedMotion: {
    title: "Motion Sensitivity Support",
    changes: [
      "✅ Respects prefers-reduced-motion: reduce",
      "✅ Animations disabled for sensitive users",
      "✅ Transitions reduced to minimal duration"
    ],
    wcagCriteria: "2.3.3 Animation from Interactions (AAA)"
  },

  highContrast: {
    title: "High Contrast Mode Support",
    changes: [
      "✅ Windows High Contrast Mode compatibility",
      "✅ Forced colors mode support",
      "✅ prefers-contrast: high media query",
      "✅ System color keywords for accessibility"
    ],
    wcagCriteria: "1.4.3 Contrast (Minimum) (AA)"
  },

  typography: {
    title: "Typography Accessibility",
    changes: [
      "✅ Improved line-height for readability (1.2 for headings)",
      "✅ System font stack for optimal rendering",
      "✅ Font-smoothing for better text clarity",
      "✅ Minimum font size support for high-DPI displays"
    ],
    wcagCriteria: "1.4.12 Text Spacing (AA)"
  }
}

// =============================================================================
// ACCESSIBILITY TESTING CHECKLIST
// =============================================================================

export const cssAccessibilityChecklist = [
  {
    category: "Color Contrast",
    tests: [
      "Test with browser dev tools contrast checker",
      "Verify 4.5:1 ratio for normal text (WCAG AA)",
      "Verify 3:1 ratio for large text (WCAG AA)",
      "Test with Windows High Contrast Mode",
      "Test with macOS Increase Contrast setting"
    ]
  },
  {
    category: "Focus Management",
    tests: [
      "Tab through all interactive elements",
      "Verify focus indicators are clearly visible",
      "Test focus order is logical",
      "Check focus doesn't get trapped",
      "Test skip navigation functionality"
    ]
  },
  {
    category: "Motion & Animation",
    tests: [
      "Enable 'Reduce motion' system setting",
      "Verify animations are disabled/reduced",
      "Test that essential functionality still works",
      "Check transitions don't cause seizures"
    ]
  },
  {
    category: "Responsive Design",
    tests: [
      "Test at 200% browser zoom",
      "Verify content reflows properly",
      "Check touch targets are adequate (44px minimum)",
      "Test on high-DPI displays"
    ]
  }
]

// =============================================================================
// BROWSER SUPPORT FOR ACCESSIBILITY FEATURES
// =============================================================================

export const browserSupport = {
  "prefers-reduced-motion": {
    chrome: "74+",
    firefox: "63+",
    safari: "10.1+",
    edge: "79+"
  },
  "prefers-contrast": {
    chrome: "96+",
    firefox: "101+",
    safari: "14.1+",
    edge: "96+"
  },
  "forced-colors": {
    chrome: "89+",
    firefox: "89+",
    safari: "Not supported",
    edge: "79+"
  },
  "focus-visible": {
    chrome: "86+",
    firefox: "85+",
    safari: "15.4+",
    edge: "86+"
  }
}

// =============================================================================
// RECOMMENDED CSS PATTERNS FOR ACCESSIBILITY
// =============================================================================

export const recommendedPatterns = {
  focusIndicators: `
    /* Consistent, visible focus indicators */
    .interactive-element:focus-visible {
      outline: 3px solid var(--focus-color);
      outline-offset: 2px;
    }
  `,

  touchTargets: `
    /* Adequate touch target sizes */
    .button, .link {
      min-height: 44px;
      min-width: 44px;
      padding: 0.5rem 1rem;
    }
  `,

  reducedMotion: `
    /* Respect motion preferences */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
  `,

  highContrast: `
    /* High contrast mode support */
    @media (forced-colors: active) {
      .element {
        forced-color-adjust: none;
        background-color: ButtonFace;
        color: ButtonText;
        border: 1px solid ButtonText;
      }
    }
  `
}
