// Accessibility Guidelines for Adam Iverson's Portfolio
// 
// This file serves as a reference for maintaining accessibility standards
// across the application. Use this checklist when adding new features.

export const accessibilityChecklist = {
  semantic: {
    title: "Semantic HTML & Structure",
    items: [
      "✅ Use proper heading hierarchy (h1 → h2 → h3)",
      "✅ Include ARIA landmarks (main, nav, article, section)",
      "✅ Use semantic HTML elements (button, nav, main, etc.)",
      "✅ Add meaningful page titles for each route",
      "✅ Include proper meta descriptions"
    ]
  },
  keyboard: {
    title: "Keyboard Navigation",
    items: [
      "✅ All interactive elements are keyboard accessible",
      "✅ Logical tab order throughout the application",
      "✅ Skip navigation link for keyboard users",
      "✅ Focus indicators are visible and clear",
      "✅ No keyboard traps"
    ]
  },
  screenReader: {
    title: "Screen Reader Support",
    items: [
      "✅ Meaningful ARIA labels on interactive elements",
      "✅ Icons have aria-hidden='true' when decorative",
      "✅ Form fields have proper labels",
      "✅ Dynamic content changes are announced",
      "✅ Current page is indicated in navigation (aria-current)"
    ]
  },
  visual: {
    title: "Visual Accessibility",
    items: [
      "✅ Sufficient color contrast (WCAG AA: 4.5:1 for normal text)",
      "✅ Dark/light theme support",
      "✅ Text is resizable up to 200% without loss of functionality",
      "✅ Focus indicators are clearly visible",
      "✅ No information conveyed by color alone"
    ]
  },
  forms: {
    title: "Form Accessibility",
    items: [
      "✅ All form fields have associated labels",
      "✅ Required fields are properly marked",
      "✅ Error messages are descriptive and associated with fields",
      "✅ Success/error states are announced to screen readers",
      "✅ Form validation is accessible"
    ]
  }
}

// Implementation notes for developers:
export const implementationNotes = {
  skipNavigation: "Added SkipNavigation component for keyboard users to bypass navigation",
  focusManagement: "Main content area has tabIndex={-1} for programmatic focus",
  cardInteractions: "Converted clickable cards to proper button elements with keyboard support",
  ariaLabels: "Added descriptive ARIA labels for all interactive elements",
  landmarks: "Used semantic HTML5 elements and ARIA landmarks for page structure"
}

// Testing recommendations:
export const testingGuidelines = [
  "Test navigation using only the keyboard (Tab, Shift+Tab, Enter, Space)",
  "Use a screen reader (NVDA, JAWS, or VoiceOver) to test content",
  "Verify color contrast using browser developer tools",
  "Test with zoom levels up to 200%",
  "Validate HTML using W3C Markup Validator",
  "Run automated accessibility tests with axe-core or similar tools"
]
