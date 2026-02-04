export const getKorean = (city) => {
  switch (city) {
    case "seosan":
      return "서산";
    case "incheon":
      return "인천";
    case "seoul":
      return "서울";
    case "jeju":
      return "제주";
    case "gangwon":
      return "강원";
    case "busan":
      return "부산";
  }
};
