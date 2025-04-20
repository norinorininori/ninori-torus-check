function checkLoveLang() {
  const selected = [...document.querySelectorAll('input[name="lang"]:checked')].map(el => el.value);
  let result = "<h2>診断結果</h2>";

  if (selected.length === 0) {
    result += "<p>少なくとも1つは選んでください！</p>";
  } else {
    result += "<p>あなたが嬉しいと感じる愛の伝え方は…</p><ul>";
    selected.forEach(type => {
      if (type === "words") result += "<li>🗣️ 言葉での愛情表現</li>";
      if (type === "time") result += "<li>⏰ 一緒に過ごす時間</li>";
      if (type === "gift") result += "<li>🎁 プレゼント（贈り物）</li>";
      if (type === "act") result += "<li>💪 行動や手伝いによる愛情</li>";
      if (type === "touch") result += "<li>🤝 スキンシップ・身体的な触れ合い</li>";
    });
    result += "</ul><p>あなたのパートナーと診断結果を見せ合ってみましょう！</p>";
  }

  document.getElementById("result").innerHTML = result;
}
