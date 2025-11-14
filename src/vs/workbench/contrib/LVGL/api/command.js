const Command = (api) => {
	api.eventBus.on(api.constant.structAndVarRelationConstants.UPDATE_TREENODE_STRUCT_AND_VARRELATION_INTEGRATE, (e) => {
		api.structAndVarRelationIntegrate.getTreeFlattener().changeNode(e.source, e.newValue, e.selectLength, e.treeFlattener);
	})
}



export default Command;
