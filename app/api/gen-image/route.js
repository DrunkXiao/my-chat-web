import * as utils from '@/app/api/utils/index'

import { genImgSchema } from './schema'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

const promptDefault = ''
const negativePromptDefault = ''

export async function GET(request) {
	const env = getRequestContext().env
	const prompt = utils.getQuery(request, 'prompt')
	const model = utils.getQuery(request, 'model') || utils.defaultGenImageModel

	const [_, err] = utils.validReqSchema(genImgSchema, { prompt, model })
	if (err) return err

	const response = await env.AI.run(model, {
		prompt: prompt + promptDefault,
		negative_prompt: negativePromptDefault,
		'content-type': 'image/png;base64',
		height: 1024,
		width: 1024
	})

	return utils.returnImage(response)
}
