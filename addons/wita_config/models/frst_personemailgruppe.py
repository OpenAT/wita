# -*- coding: utf-8 -*-
from openerp import models, fields, api
import logging
logger = logging.getLogger(__name__)


# PersonEmailGruppe: FRST groups for email addresses
class FRSTPersonEmailGruppe(models.Model):
    _inherit = "frst.personemailgruppe"

    _checkbox_fields_group_identifier = {
            'newsletter_web': 30104,
            'info_newsletter_7329': 406022,
            'spenden_newsletter_7330': 406023
        }
    logger.info("WITA frst.personemailgruppe _checkbox_fields_group_identifier: %s" % _checkbox_fields_group_identifier)
