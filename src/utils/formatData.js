const s = 1000,
  m = 60 * s,
  h = 60 * m,
  d = 24 * h,
  mo = 30 * d,
  y = 365 * d;

const fdate = [
  {
    time: y,
    text: "年"
  },
  {
    time: mo,
    text: "月"
  },
  {
    time: d,
    text: "天"
  },
  {
    time: h,
    text: "小时"
  },
  {
    time: m,
    text: "分钟"
  },
  {
    time: s,
    text: "秒"
  }
];

const formatDate = value => {
  // s m h d mo y
  // 计算出时间差
  const time = Date.now() - new Date(value);
  for (let i = 0; i < fdate.length; i++) {
    const t = time / fdate[i].time;
    if (t >= 1) {
      return Math.floor(t) + fdate[i].text + "前";
    }
  }
};

export default formatDate;
