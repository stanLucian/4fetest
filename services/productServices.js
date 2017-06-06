(function(){
	"use strict";

	angular.module("myApp").service("productService", [function(){

		
		var menu  = {
			aperitive: [
				{
					title: 'aperitiv1',
					upvotes: 3,
					subcateg: [
							{
								name: 'subaper1',
								id: 1,
								ingredients: [
										{
											id: 1,
											name: 'patrunjel'
										},
										{
											id: 2,
											name: 'marar'
										},{
											id: 3,
											name: 'muschi'
										}

								]
							},
							{
								name: 'subaper2',
								id: 2,
								ingredients: [
										{
											id: 1,
											name: 'ridiche'
										},
										{
											id: 2,
											name: 'rosie'
										},{
											id: 3,
											name: 'salam'
										}

								]
							},
							{
								name: 'subaper3',
								id: 3,
								ingredients: [
										{
											id: 1,
											name: 'testicule'
										},
										{
											id: 2,
											name: 'salamandra'
										},{
											id: 3,
											name: 'cacat'
										}

								]
							}

					],
				},
				{
					title: 'aperitiv2',
					upvotes: 15,
					subcateg: [],
				},
				{
					title: 'aperitiv3',
					upvotes: 9,
					subcateg: [],
				},
				{
					title: 'aperitiv4',
					upvotes: 7,
					subcateg: [],
				},
				],
			deserturi: [
					{
						title: 'desert1',
						upvotes: 3,
						comments: [],
					},
					{
						title: 'desert2',
						upvotes: 15,
						comments: [],
					},
			]	
		};
		return menu;

	}]);
}())