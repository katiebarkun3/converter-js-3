export const renderResult = ({ code, amount, full }) => {
return `<div class="form_result_item_icon icon">
        </div>

        <div class="form_result_item_titles">
            <div class="form_result_item_title">${code}</div>
            <div class="form_result_item_full">
                ${full}
            </div>
        </div>

        <div class="form_result_item_value">${amount.toFixed(2)}</div>`
}