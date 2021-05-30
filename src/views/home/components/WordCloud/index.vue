<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" />
</template>
<script>
import commonDataMixin from '@/mixins/commonDataMixin'
export default {
  mixins: [commonDataMixin],
  data() {
    return {
      chartData: {},
      chartSettings: {
        color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(245,166,35,.7)']
      }
    }
  },
  watch: {
    wordCloud() {
      console.log(this.wordCloud)
      const data = []
      this.wordCloud.forEach(element => {
        data.push({
          name: element.word,
          value: element.count
        })
      })
      this.chartData = {
        columns: ['name', 'value'],
        rows: data
      }
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>

</style>
