export const ModelTypeEnum = {
	ollama: 'ollama',
	openai: 'openai',
	gemini: 'gemini', // google
	grok: 'grok' // x
}

export const ExternalModelHost = {
	[ModelTypeEnum.openai]: 'https://tekk.deno.dev/api.groq.com/openai/v1',
	[ModelTypeEnum.ollama]: 'http://localhost:11434',
	[ModelTypeEnum.gemini]: 'https://gemini.tekk.us.kg',
	[ModelTypeEnum.grok]: 'https://api.x.ai/v1'
}

// 本地第三方LLM 配置模型
export const ExternalChatModelList = [
//	{
//		name: 'ollama本地',
//		model: '',
//		maxCount: 1000,
//		type: ModelTypeEnum.ollama
//	},
	{
		name: 'deepseek-r1',
		model: 'deepseek-r1-distill-llama-70b',
		maxCount: 1000,
		type: ModelTypeEnum.openai
	},
	{
		name: 'gemini-2.0-flash-exp',
		model: 'gemini-2.0-flash-exp',
		maxCount: 1000,
		type: ModelTypeEnum.gemini
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
