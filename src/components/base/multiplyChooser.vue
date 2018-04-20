<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <li v-for="(item,index) in selections" @click="toggleSelection(index)" v-bind:class="{active:checkActive(index)}">
                {{item.label}}
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    props: {
        selections: {
            type: Array,
            default: [{
                label: 'test',
                value: 0
            }]
        }
    },
    data () {
        return {
            nowIndexes: [0]
        }
    },
    methods: {
        toggleSelection (index) {
            debugger;
            // 没有被选中过的话就加进来

            let curIndex=this.nowIndexes.indexOf(index);
            // if (this.nowIndexes.indexOf(index) === -1) {
                if (this.nowIndexes.indexOf(index) === -1) {
                this.nowIndexes.push(index);
            }
            else {

                //使用js原生splice方法
                this.nowIndexes.splice(this.nowIndexes.indexOf(index), 1);
                console.log(this.nowIndexes);
                //使用lodash方法
                // this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
                //     return idx !== index
                // });
            }

            // let selectedOptions = this.nowIndexes.map(d => {
            //     return this.selections[d];
            // });

            // this.$emit('on-change', selectedOptions);
        },
        checkActive (index) {
            return this.nowIndexes.indexOf(index) !== -1;
        }
    }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li {
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
