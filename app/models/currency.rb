class Currency < ApplicationRecord
    def calculate_value(amount)
        (current_price.to_f * amount.to_f).round(4)
    end
    
    def current_price
        url_var = 'https://api.coinmarketcap.com/v1/ticker/'
        request_var = HTTParty.get(url_var + self.slug)
        response_var = JSON.parse(request_var.body)[0]["price_usd"]
    end
end
