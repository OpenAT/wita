# -*- coding: utf-'8' "-*-"
from openerp import api, models, fields, SUPERUSER_ID

import logging
_logger = logging.getLogger(__name__)


# Additional fields for the web checkout
class ResPartner(models.Model):
    _inherit = 'res.partner'

    wita_show_donation_deduction_billing_fields = fields.Boolean(string="Show Donation Deduction Billing Fields")

    info_newsletter_7329 = fields.Boolean(string="Info Newsletter 7329")
    spenden_newsletter_7330 = fields.Boolean(string="Spenden Newsletter 7330")
