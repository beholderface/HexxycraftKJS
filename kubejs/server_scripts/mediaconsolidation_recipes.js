// priority: 0

console.info('Loaded dust consolidation recipe script. -behexxyface')

ServerEvents.recipes(event => {
	event.recipes.createSequencedAssembly([ 
	'kubejs:microcrystal_amethyst' 
	], 
	'hexcasting:amethyst_dust', [
	event.recipes.createFilling('kubejs:amethyst_protocrystals', ['kubejs:amethyst_protocrystals', Fluid.of('kubejs:liquid_media',8100)]),
	event.recipes.createDeploying('kubejs:amethyst_protocrystals', ['kubejs:amethyst_protocrystals', '#hexcasting:staves']).keepHeldItem(),
	event.recipes.createPressing('kubejs:amethyst_protocrystals', 'kubejs:amethyst_protocrystals')
]).transitionalItem('kubejs:amethyst_protocrystals').loops(4)
	
	//why the fuck do these numbers have to be so far off from what the recipe ends up being ingame
	event.recipes.create.mixing([Fluid.of('kubejs:liquid_media', 8100)], ['hexcasting:amethyst_dust']).heated()
	event.recipes.create.mixing([Fluid.of('kubejs:liquid_media', 40500)], ['minecraft:amethyst_shard']).heated()
	event.recipes.create.mixing([Fluid.of('kubejs:liquid_media', 81000)], ['hexcasting:charged_amethyst']).heated()
	
	event.custom(
		{
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "input": {
    "item": "kubejs:microcrystal_amethyst"
  },
  "mana": 100,
  "output": {
    "item": "minecraft:amethyst_shard"
  }
}
	)
})

/*ServerEvents.tags('fluid', event => {
	event.get('create:bottomless/allow').add('kubejs:liquid_media')
}) no point when it's not possible to place it anyway
*/
