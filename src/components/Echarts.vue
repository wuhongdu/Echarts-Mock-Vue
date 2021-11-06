<template>
  <div class="echarts">
    <div class="echarts-box" id="echarts-box"></div>
  </div>
</template>
<script>
import "../../mock/china.js";
import { getProvince } from "@/api/province";
var provinces = [
  "shanghai",
  "hebei",
  "shanxi",
  "neimenggu",
  "liaoning",
  "jilin",
  "heilongjiang",
  "jiangsu",
  "zhejiang",
  "anhui",
  "fujian",
  "jiangxi",
  "shandong",
  "henan",
  "hubei",
  "hunan",
  "guangdong",
  "guangxi",
  "hainan",
  "sichuan",
  "guizhou",
  "yunnan",
  "xizang",
  "shanxi1",
  "gansu",
  "qinghai",
  "ningxia",
  "xinjiang",
  "beijing",
  "tianjin",
  "chongqing",
  "xianggang",
  "aomen",
  "taiwan",
];
var provincesText = [
  "上海",
  "河北",
  "山西",
  "内蒙古",
  "辽宁",
  "吉林",
  "黑龙江",
  "江苏",
  "浙江",
  "安徽",
  "福建",
  "江西",
  "山东",
  "河南",
  "湖北",
  "湖南",
  "广东",
  "广西",
  "海南",
  "四川",
  "贵州",
  "云南",
  "西藏",
  "陕西",
  "甘肃",
  "青海",
  "宁夏",
  "新疆",
  "北京",
  "天津",
  "重庆",
  "香港",
  "澳门",
  "台湾",
];
export default {
  name: "Echarts",
  data() {
    return {
      myChart: null,
    };
  },
  mounted() {
    let self = this;
    this.$nextTick(() => {
      self.myEcharts();
    });
  },
  methods: {
    myEcharts() {
      const _that = this;
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById("echarts-box"));

      let option = this.getMapOption();

      if (option && typeof option === "object") {
        this.myChart.setOption(option, true);
      }

      this.myChart.on("click", (param) => {
        console.log(param, param.name);
        // 找到省份名
        let provinceIndex = provincesText.findIndex((x) => {
          return param.name === x;
        });
        if (provinceIndex === -1) return;
        let provinceAlphabet = provinces[provinceIndex];
        // 重新渲染各省份地图
        _that.getProvinceMapOption(provinceAlphabet);
      });
    },
    getMapOption(place) {
      let option = {
        // 进行相关配置
        backgroundColor: "#fff",
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "yellow", "lightskyblue"],
        },
        geo: {
          // 这个是重点配置区
          map: place ? place : "china", // 表示中国地图
          roam: false,
          selectedMode: "single",
          label: {
            normal: {
              show: false, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            name: "测试", // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
            type: "map",
            aspectScale: 0.75,
            geoIndex: 0,
            roam: false,
            zoom: 1.5,
            label: {
              show: false,
            },
            data: [
              {
                name: "北京",
                value: 599,
                perf: "0.501s", // 性能
                downloadSpeep: "1.221MB/s", // 下载速度
                usability: "100%", // 可用性
                point: "250", // 监测点
              },
              {
                name: "上海",
                value: 142,
              },
              {
                name: "黑龙江",
                value: 44,
              },
              {
                name: "新疆",
                value: 999,
                perf: "0.501s", // 性能
                downloadSpeep: "1.221MB/s", // 下载速度
                usability: "100%", // 可用性
                point: "250", // 监测点
              },
              {
                name: "深圳",
                value: 92,
              },
              {
                name: "湖北",
                value: 810,
              },
              {
                name: "四川",
                value: 453,
              },
            ],
          },
        ],
      };
      return option;
    },
    getProvinceMapOption(provinceAlphabet) {
      const _that = this;

      getProvince({ name: provinceAlphabet }).then((value) => {
        _that.$echarts.registerMap("chongqing", value.data);
        let option = _that.getMapOption(provinceAlphabet);

        _that.myChart.setOption({
          // 进行相关配置
          backgroundColor: "#fff",
          tooltip: {}, // 鼠标移到图里面的浮动提示框
          dataRange: {
            show: false,
            min: 0,
            max: 1000,
            text: ["High", "Low"],
            realtime: true,
            calculable: true,
            color: ["orangered", "yellow", "lightskyblue"],
          },
          geo: {
            // 这个是重点配置区
            map: provinceAlphabet, // 表示中国地图
            roam: false,
            selectedMode: "single",
            label: {
              normal: {
                show: false, // 是否显示对应地名
                textStyle: {
                  color: "rgba(0,0,0,0.4)",
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: "rgba(0, 0, 0, 0.2)",
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
          series: [
            {
              name: "测试", // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
              type: "map",
              aspectScale: 0.75,
              roam: false,
              zoom: 2,
              geoIndex: 0,
              label: {
                show: false,
              },
              data: [
                {
                  name: "万州",
                  value: 599,
                  perf: "0.501s", // 性能
                  downloadSpeep: "1.221MB/s", // 下载速度
                  usability: "100%", // 可用性
                  point: "250", // 监测点
                },
                {
                  name: "江津",
                  value: 352,
                },
              ],
            },
          ],
        });
      });
    },
    showChinaMap() {
      let option = this.getMapOption();
      this.myChart.setOption(option, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &-box {
    width: 60%;
    height: 80%;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px gray;
  }
}
</style>
