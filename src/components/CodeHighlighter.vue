<template>
  <pre><code v-html="highlightedCode"></code></pre>
</template>

<script>
export default {
  name: 'CodeHighlighter',
  props: {
    code: String
  },
  computed: {
    highlightedCode() {
      return this.highlightJS(this.code);
    }
  },
  methods: {
    highlightJS(code) {
      const keywords = ['const', 'let', 'var', 'if', 'else', 'for', 'function', 'return', 'while', 'switch', 'case', 'break', 'continue'];
      let highlightedCode = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // Highlight strings
      highlightedCode = highlightedCode.replace(/(".*?"|'.*?')/g, '<span class="string">$1</span>');

      // Highlight keywords
      keywords.forEach(keyword => {
        const regExp = new RegExp(`\\b${keyword}\\b`, 'g');
        highlightedCode = highlightedCode.replace(regExp, `<span class="keyword">${keyword}</span>`);
      });

      return highlightedCode;
    }
  }
}
</script>

<style>
pre, code {
  background-color: #f5f5f5;
  border-radius: 5px;
}

.keyword {
  color: #0076f6;
  font-weight: bold;
}

.string {
  color: #d14;
}
</style>
