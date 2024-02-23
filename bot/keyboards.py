from aiogram.types import WebAppInfo, InlineKeyboardButton, InlineKeyboardMarkup

web_app = WebAppInfo(url="https://empathystorm.github.io/")

keyboard = InlineKeyboardMarkup(
    inline_keyboard=[[InlineKeyboardButton(text="Сайт", web_app=web_app)]]
)
