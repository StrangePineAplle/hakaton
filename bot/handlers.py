from aiogram import Router, types
from aiogram.filters.command import Command

from keyboards import keyboard

router = Router()


@router.message(Command("start"))
async def start(message: types.Message) -> None:
    await message.answer(
        "<b>Давайте начнём!</b>\n\n"
        "Пожалуйста, нажмите на кнопку ниже, чтобы перейти в приложение",
        reply_markup=keyboard,
        parse_mode="HTML",
    )
