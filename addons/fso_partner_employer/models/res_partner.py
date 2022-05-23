# -*- coding: utf-8 -*-

from openerp import api, fields, models

import logging
logger = logging.getLogger(__name__)


class ResPartnerEmployer(models.Model):
    _inherit = 'res.partner'

    employer_web = fields.Char(string='Employer')

    def create_employer_mail_message(self, partner, values):
        if "employer_web" in values:
            employer = values.get('employer_web', '')
            message_body = employer + "\n" + \
                           '---\n' +\
                           'Arbeitgeber'

            logger.debug("Found employer field (\"%s\"). Creating mail.message"
                         % employer)

            partner.sudo().with_context(mail_post_autofollow=False).message_post(
                body=message_body,
                type='comment',
                subtype='fso_mail_message_subtypes_employer.fson_employer',
                content_subtype="plaintext")

    @api.model
    def create(self, values):
        partner = super(ResPartnerEmployer, self).create(values)
        self.create_employer_mail_message(partner, values)
        return partner

    @api.multi
    def write(self, values):
        res = super(ResPartnerEmployer, self).write(values)

        for p in self:
            self.create_employer_mail_message(p, values)

        return res
