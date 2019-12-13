<template>
    <div>
        <h5>{{ title }}</h5>
        <GChart
            class="skill-chart"
            type="BarChart"
            :data="[['Skill', 'Value', {type: 'string', role: 'tooltip'}], ...dataWithTooltips]"
            :options="{
                backgroundColor: 'transparent',
                legend: {
                    position: 'none'
                },
                fontName: 'Quicksand',
                fontSize: 14,
                colors: ['#4285f4'],
                hAxis: {
                    textPosition: 'none',
                    minValue: 0,
                    maxValue: 4,
                    gridlines: {
                        color: 'transparent'
                    }
                },
                height: this.rowHeight + 10,
                chartArea: {
                    left: '20%',
                    height: this.rowHeight,
                    width: '80%'
                }
            }"
        />
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
    name: 'SkillChart',
    components: {
        GChart
    },
    props: {
        title: String,
        data: Array
    },
    computed: {
        rowHeight() {
            return this.data.length * 30;
        },
        dataWithTooltips() {
            const result = this.data.map(dataPoint => {
                let tooltip;
                switch (dataPoint[1]) {
                    case 4:
                        tooltip = 'Expert';
                        break;
                    case 3:
                        tooltip = 'Advanced';
                        break;
                    case 2:
                        tooltip = 'Proficient';
                        break;
                    case 1:
                        tooltip = 'Novice';
                        break;
                    default:
                        tooltip = 'Basic Knowledge';
                        break;
                }
                return dataPoint.concat([tooltip]);
            });
            return result
        }
    }
};
</script>

<style>
.skill-chart {
    width: 100%;
}
</style>
