import { ExternalModelHost, ModelTypeEnum, genSystemMessage, getGrokKey, showToast } from '@/utils'

import OpenAI from 'openai'

let grokClient

export async function chatWithGrok({ model, messages }, onCb = () => {}) {
	let apiKey = getGrokKey()
	if (!apiKey) {
		showToast('请先配置Grok Api Key', 'error')
		throw new Error('请先配置Grok Api Key')
	}
	if (!grokClient) {
		grokClient = new OpenAI({
			apiKey: apiKey,
			dangerouslyAllowBrowser: true,
			baseURL: ExternalModelHost[ModelTypeEnum.grok]
		})
	}

	try {
		const stream = await grokClient.chat.completions.create({
			model: model,
			messages: genSystemMessage().concat(messages),
			stream: true
		})

		for await (const chunk of stream) {
			onCb(chunk.choices[0]?.delta?.content || '')
		}
		onCb('[DONE]') // 兼容格式
	} catch (error) {
		showToast(error.message)
	}
}