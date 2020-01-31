<template>
    <div class="textarea-wrapper">
        <!--pre 文本通常会保留空格和换行符。-->
        <div class="content">{{value}}</div>
        <textarea
            v-model="value"
            @input="changeInput($event)"
            placeholder="请在此处输入文字..."
        ></textarea>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component({
  name: 'y-textarea'
})
export default class YTextarea extends Vue {
    private value: string = ''
    private changeInput(e: Event) {
        this.value = (e.target as HTMLInputElement).value;
    } 
}
</script>

<style lang="less" scoped>
.textarea-wrapper {
    position: relative;
    min-height : 20px;
    width: 100%;
    .content{
        display: block;
        visibility: hidden;
        font-size: 14px;
        color: #333333;
        line-height: 1.3;
        word-wrap:break-word;
        padding: 0;
    }
    textarea{
        overflow:hidden;
        resize:none;
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: #333333;
        line-height: 1.3;
        padding: 0px;
        position: absolute;
        left: 0;
        top: 0;
    }
}


</style>