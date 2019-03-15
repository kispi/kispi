<template>
    <div class="date-range-picker">
        <div class="flex-row">
            <button class="btn btn-link flex-wrap" @click="move('prev')"><i class="zmdi zmdi-chevron-left"></i></button>
            <div class="flex-row">
                <Datepicker
                    v-if="selectedType.range === 0"
                    :value="start.toDate()"
                    @selected="onDateStart"/>
                <Datepicker
                    v-if="selectedType.range === 0"
                    :value="end.toDate()"
                    @selected="onDateEnd"/>
                <Selector
                    :items="rangeTitles"
                    v-model="displayDate"
                    @change="onSelectRangeType"/>
            </div>
            <button class="btn btn-link flex-wrap" @click="move('next')" :disabled="endReached()"><i class="zmdi zmdi-chevron-right"></i></button>
        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import Selector from "@/components/app/Selector";

export default {
    components: { Datepicker, Selector },
    computed: {
        rangeTypes() {
            return [{
                title: this.$translate("DATEPICKER_RANGETYPE_TODAY"),
                range: 1,
            }, {
                title: this.$translate("DATEPICKER_RANGETYPE_WEEK"),
                range: 7,
            }, {
                title: this.$translate("DATEPICKER_RANGETYPE_MONTH"),
                range: 30,
            }, {
                title: this.$translate("CUSTOM"),
                range: 0,
            }]
        },
        rangeTitles() {
            return this.rangeTypes.map(r => r.title)
        },
    },
    data: _ => ({
        displayDate: "",
        selectedType: {},
        start: null,
        end: null
    }),
    mounted() {
        this.start = this.$moment()
        this.end = this.$moment()
        this.selectedType = this.rangeTypes[0]
        this.onSelectRangeType()
    },
    methods: {
        onDate() {
            this.setDisplayDate();
            this.$emit("change", this.start, this.end)
        },
        onDateStart(date) {
            this.start = this.$moment(date)
            this.onDate()
        },
        onDateEnd(date) {
            this.end = this.$moment(date)
            this.onDate()
        },
        setDisplayDate() {
            setTimeout(_ => {
                if (this.selectedType.range > 0) {
                    this.displayDate = this.start.format("YYYY-MM-DD") + " - " + this.end.format("YYYY-MM-DD")                    
                }                
            }, 0)
        },
        onSelectRangeType(arg) {
            if (arg && arg.oldVal !== arg.newVal) {
                this.selectedType = this.rangeTypes.find(t => {
                    return t.title === arg.newVal
                })
            }
            this.end = this.$moment()
            this.start = this.$moment()
            if (this.selectedType.range > 1) {
                this.start = this.$moment().add(-this.selectedType.range, 'days')
            }
            this.onDate()
        },
        endReached() {
            return (this.end >= this.$moment());
        },
        move(direction) {
            if (!this.start) this.start = this.$moment();
            if (!this.end) this.end = this.$moment();

            if (this.selectedType.range > 0) {
                let days = (direction === 'prev' ? this.selectedType.range : -this.selectedType.range);
                this.start = this.start.add(-days, 'days')
                this.end = this.end.add(-days, 'days')
                this.onDate()
            }
        }
    }
};
</script>


<style lang="less">
// parent class (.date-range-picker) must be here since we're not using scoped here.
.date-range-picker {
    .btn-link {
        box-shadow: none;

        i {
            font-size: 24px;
            color: #000 !important;
        }
    }

    .selector {
        .selected-item {
            font-size: 20px;
            text-align: center;
            padding: 12px !important;
        }

        ul.item-list {
            left: 0;
            right: 0;
            
            li {
                padding: 16px;
            }
        }
    }

    .vdp-datepicker {
        input {
            cursor: pointer;
            border-radius: 0;
            border: none;
            max-width: 100px;
            padding: 10px 0;
            text-decoration: underline;
            // box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.24) !important;
        }
    }
}
</style>