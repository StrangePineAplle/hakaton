from aiogram import Router, types
from aiogram.filters.command import Command

from keyboards import keyboard

router = Router()


@router.message(Command("start"))
async def start(message: types.Message) -> None:
    await message.answer("Переход на сайт", reply_markup=keyboard)
