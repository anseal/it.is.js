export const finalization_registry_disabled_values = []
export const finalization_registry_values = [
	"another_realm(`new (class FinalizationRegistryEx extends FinalizationRegistry {})(()=>{})`)",
	"another_realm(`new (class extends FinalizationRegistry {})(()=>{})`)",
	"another_realm(`new FinalizationRegistry(()=>{})`)",
	"new (class FinalizationRegistryEx extends FinalizationRegistry {})(()=>{})",
	"new (class extends FinalizationRegistry {})(()=>{})",
	"new FinalizationRegistry(()=>{})"
]