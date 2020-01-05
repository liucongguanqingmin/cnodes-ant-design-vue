<template>
  <div id="app">
    <div class="cell" v-for="(item, i) in all.data" :key="i">
      <div class="left">
        <a :href="'/user/' + item.author.loginname">
          <img :src="item.author.avatar_url" :title="item.author.loginname" />
        </a>
        <span class="count_of_replies" title="回复数">
          {{ item.reply_count }}/{{ item.visit_count }}
        </span>

        <span class="put_top">置顶</span>

        <a
          class="topic_title"
          href="/topic/5e0a0992ba8f6d46c4edfeb1"
          :title="item.title"
        >
          {{ item.title }}
        </a>
      </div>
      <div class="right">
        <span>
          <a
            class="last_time pull-right"
            href="/topic/5e0a0992ba8f6d46c4edfeb1#5e0f090a81adfe2602079c0a"
          >
            <img
              class="user_small_avatar"
              src="https://avatars0.githubusercontent.com/u/25097125?v=4&amp;s=120"
            />
          </a>
        </span>
        <span class="last_active_time">{{ item.create_at | formatDate }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.left {
  display: inline-block;
  width: 70%;
}

.right {
  width: 10%;
  float: right;
}

.cell {
  width: 80%;
  margin: 10px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #ffffff;
}

img {
  width: 30px;
  height: 30px;
}
div {
  color: #333;
}
.cell:hover {
  background-color: #e1e1e1;
}
</style>

<script>
import axios from "axios";
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
export default {
  data() {
    console.log("nav is:" + this.nav);
    return {
      all: []
    };
  },
  props: ["nav"],
  mounted() {
    axios
      .get("https://cnodejs.org/api/v1/topics?page=1&&limit=10")
      .then(response => {
        this.all = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  filters: {
    formatDate(value) {
      // s m h d mo y
      // 计算出时间差
      const time = Date.now() - new Date(value);
      for (let i = 0; i < fdate.length; i++) {
        const t = time / fdate[i].time;
        if (t >= 1) {
          return Math.floor(t) + fdate[i].text + "前";
        }
      }
    }
  }
};
</script>
