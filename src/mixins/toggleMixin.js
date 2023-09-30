export default {

    props: {
			show: {
				type: Boolean,
				default: false,
			}
		},

    methods: {
      hideDialog() {
        this.$emit('update:show', false)
      }
    },

    //... могут быть и другие свойства и методы
}