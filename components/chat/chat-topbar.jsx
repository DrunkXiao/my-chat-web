import { AlertModal } from '@/components/common/AlertModal'
import { ChatTypeEnum } from '@/utils'
import { CircleAlert } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Trash2 } from 'lucide-react'
import { memo } from 'react'
import { useChat } from '@/hooks/useChat'

const ChatTop = memo(({ type }) => {
	const { onClear, preTrans, setPreTrans } = useChat(type)
	const onCheckedChange = (checked) => {
		setPreTrans(checked)
	}

	return (
		<div className='p-1 px-2 flex items-center gap-3 text-xs'>
			<CircleAlert className='text-primary/80 h-4 w-4' />
			<div className='text-muted-foreground text-wrap max-w-[260px] md:max-w-[500px]'>
				{type === ChatTypeEnum.chat &&
					'默认使用阿里千问模型，对中文友好，最多保存500条历史记录'}
				{type === ChatTypeEnum.genImage &&
					'详细的文字描述，最多保存50条记录。右侧可以启用翻译模式'}
				{type === ChatTypeEnum.translate && '选择翻译模式，进行文本翻译，最多保存500条历史记录'}
			</div>

			{type === ChatTypeEnum.genImage && (
				<Switch checked={preTrans} onCheckedChange={onCheckedChange} />
			)}

			<AlertModal
				title='确认操作'
				desc='确定要清空本地保存的所有记录吗，无法恢复！'
				onConfirm={onClear}
			>
				<Trash2 className='cursor-pointer h4 w-4 text-primary hover:text-primary/80' />
			</AlertModal>
		</div>
	)
})

ChatTop.displayName = 'ChatTop'
export { ChatTop }
