import Vue from 'vue'
import VCharts from 'v-charts'
import 'v-charts/lib/style.css'
import VELine from 'v-charts/lib/line.common'

Vue.component('ve-line',VELine)
Vue.use(VCharts)