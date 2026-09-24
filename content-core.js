window.LESSON_CONTENT = window.LESSON_CONTENT || {};
window.MathoraContent = {
  E(prompt, steps, opts={}) {
    return {prompt, steps, ...opts};
  },
  H(tier, prompt, steps) {
    return {tier, prompt, steps};
  },
  C(data) {
    return {
      explain: data.explain || "",
      keyPoints: data.keyPoints || [],
      rules: data.rules || [],
      method: data.method || [],
      mistakes: data.mistakes || [],
      vocab: data.vocab || [],
      examples: data.examples || [],
      practice: data.practice || {foundation:[],core:[],extension:[],reasoning:[]},
      homework: data.homework || [],
      cambridge: data.cambridge || "",
      examSuccess: data.examSuccess || "",
      sourceImages: data.sourceImages || []
    };
  }
};
