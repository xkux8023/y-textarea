import Vue from 'vue';
import YTextarea from './y-textarea';
const components: { [propsName: string]: any } = {
    YTextarea,
};

const install = (vue: typeof Vue): void => {
  // 安装全部的插件
  Object.keys(components).forEach((key) => {
    vue.component(key, components[key]);
  });
};

export default {
  install,
  ...components,
};
