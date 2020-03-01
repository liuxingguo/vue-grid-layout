import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';


const lib = {
    // ResponsiveGridLayout,
    GridLayout,
    GridItem
}

// module.exports = VueGridLayout;
const install = function(Vue) {
    if (install.installed) return;
    install.installed = true;
    Object.keys(lib).forEach(key => {
        Vue.component(key, lib[key]);
    });
};
  
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
const VueGridLayout = {
    ...lib,
    install
}
export default VueGridLayout;
export { GridLayout, GridItem };