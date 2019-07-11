<template>
    <div id="area">
        <el-select v-model="province" placeholder="请选择" @change="selectData('provinceData', 'cityData', $event)">
            <el-option
                v-for="item in provinceData"
                :key="item.oid"
                :label="item.area_name"
                :value="item.oid">
            </el-option>
        </el-select>

        <el-select v-model="city" placeholder="请选择" @change="selectData('cityData', 'regionData', $event)">
            <el-option
                v-for="item in cityData"
                :key="item.oid"
                :label="item.area_name"
                :value="item.oid">
            </el-option>
        </el-select>

        <el-select v-model="region" placeholder="请选择">
            <el-option
                v-for="item in regionData"
                :key="item.oid"
                :label="item.area_name"
                :value="item.oid">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import { loadScript } from 'js/util'

export default {
    name: 'area_pubile',
    props: {
        provinceId: null,
        cityId: null,
        regionId: null,
    },
    data () {
        return {
            provinceData: [],
            cityData: [],
            regionData: [],
            province: null,
            city: null,
            region: null,
        }
    },
    mounted () {
        loadScript('http://missxiaolin.com/area-data2_20190711.js', 'area-data', res => {
            let data = window.areaData.children
            this.provinceData = data
            this.checkData()
        })
    },
    methods: {
        // 选择
        selectData (oD, nD, v) {
            let oldData = this[oD],
                item = {}
            oldData.forEach(res => {
                if (res.oid == v) {
                    item = res
                }
            })
            if (! item) {
                return
            }
            if (nD == 'cityData') {
                this.cityData = []
                this.city = null
                this.regionData = []
                this.region = null
            }
            if (nD == 'regionData') {
                this.regionData = []
                this.region = null
            }
            this[nD] = item.children || []
        },
        // 已选
        checkData () {
            let provinceData = [],
                cityData = [],
                regionData = []
            if (!this.provinceId) {
                return
            }
            this.province = this.provinceId
            this.provinceData.forEach(res => {
                if (res.oid == this.province) {
                    provinceData = res
                }
            })
            this.cityData = provinceData.children
            if (! this.cityId) {
                return
            }
            this.city = this.cityId
            this.cityData.forEach(res => {
                if (res.oid == this.city) {
                    cityData = res
                }
            })
            this.regionData = cityData.children
            if (! this.regionId) {
                return
            }
            this.region = this.regionId
        },
        // 发送父组件
        sendData (type, value) {
            let data = {
                id: value,
                type: type,
            }
            this.$emit('callback', data)
        }
    },
    // 监听
    watch: {
        province (newValue, oldValue) {
            this.sendData(1, newValue)
        },
        city (newValue, oldValue) {
            this.sendData(2, newValue)
        },
        region (newValue, oldValue) {
            this.sendData(3, newValue)
        }
    }
}
</script>