BlockEvents.rightClicked("create:depot", event => {
	//console.info(event.player.gameMode.name)
	let block = event.block;
	let x = block.x;
	let y = block.y;
	let z = block.z;
	if(block.entityData.HeldItem != undefined){
		let heldNBT = block.entityData.HeldItem.Item;
		let scrollCount = heldNBT.Count;
		
		//dye a scroll in a depot when rclicked with brown dye if it holds a pattern and is not already an ancient scroll
		if (event.item.count >= scrollCount){
			if ((heldNBT.id == "hexcasting:scroll_small" || heldNBT.id == "hexcasting:scroll_medium" || heldNBT.id == "hexcasting:scroll") && event.hand  == "MAIN_HAND" && event.item.id == "minecraft:brown_dye"){
				if(heldNBT.tag != undefined){
					if(heldNBT.tag.op_id == undefined){
						event.cancel();
						//console.info("Not currently an ancient scroll. Applying pigment.");
						event.server.runCommandSilent(`playsound minecraft:entity.item.pickup master @a ${x} ${y} ${z} 0.25`)
						event.server.runCommandSilent(`data modify block ${x} ${y} ${z} HeldItem.Item.tag.op_id set value "counterfeit:scroll"`)
						//only set the display name if it has not already been modified
						if(heldNBT.tag.display == undefined){
							event.server.runCommandSilent(`data modify block ${x} ${y} ${z} HeldItem.Item.tag.display.Name set value '{"text":"Counterfeit Ancient Scroll"}'`)
						}
						else {
							if(heldNBT.tag.display.Name == undefined){
								event.server.runCommandSilent(`data modify block ${x} ${y} ${z} HeldItem.Item.tag.display.Name set value '{"text":"Counterfeit Ancient Scroll"}'`)
							}
						}
						event.item.count = event.item.count - scrollCount;
					}
				}
			}
		}
		
		//un-dye a scroll in a depot when rclicked with a wet sponge
		if ((heldNBT.id == "hexcasting:scroll_small" || heldNBT.id == "hexcasting:scroll_medium" || heldNBT.id == "hexcasting:scroll") && event.hand  == "MAIN_HAND" && event.item.id == "minecraft:wet_sponge"){
			if(heldNBT.tag != undefined){
				if(heldNBT.tag.op_id == "counterfeit:scroll"){
					event.cancel();
					event.server.runCommandSilent(`playsound minecraft:entity.item.pickup master @a ${x} ${y} ${z} 0.25`)
					event.server.runCommandSilent(`data remove block ${x} ${y} ${z} HeldItem.Item.tag.op_id`)
					if(heldNBT.tag.display.Name == "{\"text\":\"Counterfeit Ancient Scroll\"}"){
						event.server.runCommandSilent(`data remove block ${x} ${y} ${z} HeldItem.Item.tag.display.Name`)
					}
				}
			}
		}
	}
})
