BlockEvents.rightClicked("create:depot", event => {
	//console.info()
	let block = event.block;
	let x = block.x;
	let y = block.y;
	let z = block.z;
	if(block.entityData.HeldItem != undefined){
		let heldNBT = block.entityData.HeldItem.Item;
		let scrollCount = heldNBT.Count;
		if (event.item.count >= scrollCount){
			if ((heldNBT.id == "hexcasting:scroll_small" || heldNBT.id == "hexcasting:scroll_medium" || heldNBT.id == "hexcasting:small") && event.hand  == "MAIN_HAND" && event.item.id == "minecraft:brown_dye"){
				if(heldNBT.tag != undefined){
					if(heldNBT.tag.op_id == undefined){
						console.info("Not currently an ancient scroll. Applying pigment.");
						event.server.runCommandSilent(`playsound minecraft:entity.item.pickup master @a ${x} ${y} ${z} 0.25`)
						event.server.runCommandSilent(`data modify block ${x} ${y} ${z} HeldItem.Item.tag.op_id set value "counterfeit:scroll"`)
						event.server.runCommandSilent(`data modify block ${x} ${y} ${z} HeldItem.Item.tag.display.Name set value '{"text":"Counterfeit Ancient Scroll"}'`)
						event.item.count = event.item.count - scrollCount;
					}
				}
			}
		}
	}
})