import asyncio
import logging
from aiogram import Bot, Dispatcher

from configs.config import BOT_TOKEN
from bot import start

logging.basicConfig(level=logging.INFO)


async def main():
    bot = Bot(BOT_TOKEN)
    dp = Dispatcher()
    dp.include_routers(start.router)

    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
