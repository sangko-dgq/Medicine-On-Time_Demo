new Vue ({
	el: '#taskList',
	data: {
		title: 'to do list',
		tasks: [
			// { name: '开始一支新钢笔' },
			// { name: '读一本书' },
			// { name: '与团队会面' }
		]
	},
	methods: {
		newItem: function() {
			if (!this.tasks.name) {
				return
			}
			this.tasks.push ( {
				name: this.tasks.name,
				del: ''
			});
      this.tasks.name = "";
		},
		delItem: function (task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	}
})