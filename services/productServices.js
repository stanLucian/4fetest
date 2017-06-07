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
											id: 7,
											name: 'patrunjel',
											details: [
												{
													id: 25,
													name: 'ceva',
													description: 'dssdaasddasasddasasddas'
												},
												{
													id: 26,
													name: 'ingred',
													description: 'dssdaasddasasddasasddaszzzzz'
												},
												{
													id: 27,
													name: 'ingredingredingredingred',
													description: 'dssdaasddasaazzzzzsddasasddas'
												}

											]
										},
										{
											id: 8,
											name: 'marar',
											details: [
											]
										},
										{
											id: 9,
											name: 'muschi',
											details: [
											]
										}
								]
							},
							{
								name: 'subaper2',
								id: 2,
								ingredients: [
										{
											id: 10,
											name: 'ridiche',
											details: [
												{
													id: 27,
													name: '11111',
													description: 'dssdaasddasasddasasddas'
												},
												{
													id: 28,
													name: '222',
													description: 'dssdaasddasasddasasddaszzzzz'
												},
												{
													id: 29,
													name: '33333',
													description: 'dssdaasddasaazzzzzsddasasddas'
												}

											]
										},
										{
											id: 11,
											name: 'rosie'
										},{
											id: 12,
											name: 'salam'
										}

								]
							},
							{
								name: 'subaper3',
								id: 3,
								ingredients: [
										{
											id: 13,
											name: 'testicule'
										},
										{
											id: 14,
											name: 'salamandra'
										},{
											id: 15,
											name: 'cacat'
										}

								]
							}

					],
				},
				{
					title: 'Pranz',
					upvotes: 15,
					subcateg: [
							{
								name: 'Pranz1',
								id: 4,
								ingredients: [
										{
											id: 16,
											name: 'patrunjel'
										},
										{
											id: 17,
											name: 'marar'
										},{
											id: 17,
											name: 'muschi'
										}

								]
							},
							{
								name: 'Pranz2',
								id: 5,
								ingredients: [
										{
											id: 19,
											name: 'ridiche'
										},
										{
											id: 20,
											name: 'rosie'
										},{
											id: 21,
											name: 'salam'
										}

								]
							},
							{
								name: 'Pranz3',
								id: 6,
								ingredients: [
										{
											id: 22,
											name: 'testicule'
										},
										{
											id: 23,
											name: 'salamandra'
										},{
											id: 24,
											name: 'cacat'
										}

								]
							}
					],
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
