from aiogram import Router, types
from aiogram.filters.command import Command

router = Router()


@router.message(Command("start"))
async def start(message: types.Message) -> None:
    await message.answer("Драстье.")
