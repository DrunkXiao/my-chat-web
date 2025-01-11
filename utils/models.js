export const ModelTypeEnum = {
	ollama: 'ollama',
	openai: 'openai',
	gemini: 'gemini', // google
	grok: 'grok' // x
}

export const ExternalModelHost = {
	[ModelTypeEnum.openai]: 'https://api.openai.com/v1',
	[ModelTypeEnum.ollama]: 'http://localhost:11434',
	[ModelTypeEnum.gemini]: 'https://gemini.trunkx.us.kg',
	[ModelTypeEnum.grok]: 'https://flux.drunkxiao.us.kg'
}

// 本地第三方LLM 配置模型
export const ExternalChatModelList = [
//	{
//		name: 'ollama本地',
//		model: '',
//		maxCount: 1000,
//		type: ModelTypeEnum.ollama
//	},
//	{
//		name: 'grok-2-1212',
//		model: 'grok-2-1212',
//		maxCount: 1000,
//		type: ModelTypeEnum.grok
//	},
	{
		name: 'gemini-1.5-flash',
		model: 'gemini-1.5-flash',
		maxCount: 1000,
		type: ModelTypeEnum.gemini
	},
	{
		name: 'gemini-2.0-flash-exp',
		model: 'gemini-2.0-flash-exp',
		maxCount: 1000,
		type: ModelTypeEnum.gemini
	},
	{
		name: 'flux-1-schnell',
		model: 'flux-1-schnell',
		maxCount: 1000,
		type: ModelTypeEnum.grok
	}
//	{
//		name: 'gpt-4o',
//		model: 'gpt-4o',
//		maxCount: 1000,
//		type: ModelTypeEnum.openai
//	}
]

//export const ExternalGenImageModelList = [
//	{
//		name: 'grok-2-vision-1212',
//		model: 'grok-2-vision-1212',
//		maxCount: 1000,
//		type: ModelTypeEnum.grok
//	}
//]
